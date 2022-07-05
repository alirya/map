import Callable from '@alirya/function/callable';
import Value from '@alirya/value/value';
import MapContainer from './map/map';

export function SortParameters<Key, Value>(
    value : Map<Key, Value>,
    compare : Callable<[[key:Key, value:Value], [key:Key, value:Value]], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(value);

    const sorted = arrays.sort(compare);

    return new Map<Key, Value>(sorted);
}

export type SortArgumentMap<Key, Val> = MapContainer<Map<Key, Val>> & {
    compare : Callable<[[key:Key, value:Val], [key:Key, value:Val]], number>,
};
export type SortArgumentValue<Key, Val> = Value<Map<Key, Val>> & {
    compare : Callable<[[key:Key, value:Val], [key:Key, value:Val]], number>,
};

export type SortArgument<Key, Val> = SortArgumentMap<Key, Val> | SortArgumentValue<Key, Val>;


export function SortParameter<Key, Val>(
    {
        map,
        compare,
    } : SortArgumentMap<Key, Val>
) : Map<Key, Val>;

export function SortParameter<Key, Val>(
    {
        value,
        compare,
    } : SortArgumentValue<Key, Val>
) : Map<Key, Val>;

export function SortParameter<Key, Val>(
    {
        value,
        map,
        compare,
    } : SortArgumentMap<Key, Val> & SortArgumentValue<Key, Val>
) : Map<Key, Val> {

    return SortParameters(map || value, compare);
}


namespace Sort {
    export type ArgumentMap<Key, Val> = SortArgumentMap<Key, Val>;
    export type ArgumentValue<Key, Val> = SortArgumentValue<Key, Val>;
    export type Argument<Key, Val> = SortArgument<Key, Val>;
    export const Parameters = SortParameters;
    export const Parameter = SortParameter;
}
export default Sort;
