import BaseSortKey from '../sort-key';
import Callable from '@alirya/function/callable';
import MapContainer from '../map/map';
import Value from '@alirya/value/value';

export function SortKeyParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Key, Key], number>
) : void {

    const sorted = BaseSortKey.Parameters(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}

export type SortKeyArgumentMap<Key, Val> = MapContainer<Map<Key, Val>> & {
    compare : Callable<[Key, Key], number>
};
export type SortKeyArgumentValue<Key, Val> = Value<Map<Key, Val>> & {
    compare : Callable<[Key, Key], number>
};
export type SortKeyArgument<Key, Val> = SortKeyArgumentMap<Key, Val> | SortKeyArgumentValue<Key, Val>;

export function SortKeyParameter<Key, Val>(
    {
        map,
        compare
    } : SortKeyArgumentMap<Key, Val>
) : void;

export function SortKeyParameter<Key, Val>(
    {
        value,
        compare
    } : SortKeyArgumentValue<Key, Val>
) : void;

export function SortKeyParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : SortKeyArgumentMap<Key, Val> & SortKeyArgumentValue<Key, Val>
) : void {

    SortKeyParameters(map || value, compare);
}


namespace SortKey {
    export const Parameters = SortKeyParameters;
    export const Parameter = SortKeyParameter;
    export type ArgumentMap<Key, Val> = SortKeyArgumentMap<Key, Val>;
    export type ArgumentValue<Key, Val> = SortKeyArgumentValue<Key, Val>;
    export type Argument<Key, Val> = SortKeyArgument<Key, Val>;
}
export default SortKey;
