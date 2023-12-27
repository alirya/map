import MapContainer from './map/map.js';
import Value from '@axiona/value/value.js';
import Callable from '@axiona/function/callable.js';

export function SortValueParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Value, Value], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return compare(value1[1], value2[1]);
    });

    return new Map<Key, Value>(sorted);
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
        compare,
    } : SortValueArgumentMap<Key, Val>
) : Map<Key, Val>;

export function SortValueParameter<Key, Val>(
    {
        value,
        compare,
    } : SortValueArgumentValue<Key, Val>
) : Map<Key, Val>;

export function SortValueParameter<Key, Val>(
    {
        value,
        map,
        compare,
    } : SortValueArgumentMap<Key, Val> & SortValueArgumentValue<Key, Val>
) : Map<Key, Val> {

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
