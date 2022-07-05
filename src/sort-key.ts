import Callable from '@alirya/function/callable';
import MapContainer from './map/map';
import Value from '@alirya/value/value';

export function SortKeyParameters<Key, Value>(
    map : Map<Key, Value>,
    filter : Callable<[Key, Key], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return filter(value1[0], value2[0]);
    });

    return new Map<Key, Value>(sorted);
}

export type SortKeyArgumentMap<Key, Val> = MapContainer<Map<Key, Val>> & {
    compare : Callable<[Key, Key], number>
};
export type SortKeyArgumentValue<Key, Val> = Value<Map<Key, Value>> & {
    compare : Callable<[Key, Key], number>
};

export type SortKeyArgument<Key, Val> = SortKeyArgumentMap<Key, Val> | SortKeyArgumentValue<Key, Val>;

export function SortKeyParameter<Key, Val>(
    {
        map,
        compare,
    } : SortKeyArgumentMap<Key, Val>
) : Map<Key, Val>;

export function SortKeyParameter<Key, Val>(
    {
        value,
        compare,
    } : SortKeyArgumentValue<Key, Val>
) : Map<Key, Val>;

export function SortKeyParameter<Key, Val>(
    {
        value,
        map,
        compare,
    } : SortKeyArgumentMap<Key, Val> & SortKeyArgumentValue<Key, Val>
) : Map<Key, Val> {

    return SortKeyParameters(map || value, compare);
}



namespace SortKey {
    export const Parameters = SortKeyParameters;
    export const Parameter = SortKeyParameter;
    export type ArgumentMap<Key, Val> = SortKeyArgumentMap<Key, Val>;
    export type ArgumentValue<Key, Val> = SortKeyArgumentValue<Key, Val>;
    export type Argument<Key, Val> = SortKeyArgument<Key, Val>;
}
export default SortKey;
