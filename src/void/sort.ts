import MapContainer from '../map/map.js';
import Value from '@alirya/value/value.js';
import BaseSort from '../sort.js';
import Callable from '@alirya/function/callable.js';

export function SortParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[pair:[key:Key, value:Value], pair:[key:Key, value:Value]], number>
) : void {

    const sorted = BaseSort.Parameters(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }

}

export type SortArgument<Key, Val> = MapContainer<Map<Key, Val>> & Value<Map<Key, Val>> & {
    compare : Callable<[pair:[key:Key, value:Val], pair:[key:Key, value:Val]], number>
};


export function SortParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : SortArgument<Key, Val>
) : void {

    SortParameters(map || value, compare);

}


namespace Sort {
    export const Parameters = SortParameters;
    export const Parameter = SortParameter;
    export type Argument<Key, Val> = SortArgument<Key, Val>;
}
export default Sort;
