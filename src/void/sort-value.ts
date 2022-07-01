import BaseSortValue from '../sort-value';
import Callable from '@alirya/function/callable';
import MapContainer from '../map/map';
import Value from '@alirya/value/value';

export function SortValueParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Value, Value], number>
) : void {

    const sorted = BaseSortValue.Parameters(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}
export type SortValueArgumentMap<Key, Val> = MapContainer<Map<Key, Val>> & {
    compare : Callable<[Val, Val], number>
};
export type SortValueArgumentValue<Key, Val> = Value<Map<Key, Value>> & {
    compare : Callable<[Val, Val], number>
};

export type SortValueArgument<Key, Val> = SortValueArgumentMap<Key, Val> | SortValueArgumentValue<Key, Val>;

export function SortValueParameter<Key, Val>(
    {
        map,
        compare
    } : SortValueArgumentMap<Key, Val>
) : void;

export function SortValueParameter<Key, Val>(
    {
        value,
        compare
    } : SortValueArgumentValue<Key, Val>
) : void;

export function SortValueParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : SortValueArgumentMap<Key, Val> & SortValueArgumentValue<Key, Val>
) : void {

    return SortValueParameters(map || value, compare);
}


namespace SortValue {
    export const Parameters = SortValueParameters;
    export const Parameter = SortValueParameter;
    export type ArgumentMap<Key, Val> = SortValueArgumentMap<Key, Val>;
    export type ArgumentValue<Key, Val> = SortValueArgumentValue<Key, Val>;
    export type Argument<Key, Val> = SortValueArgument<Key, Val>;
}
export default SortValue;
