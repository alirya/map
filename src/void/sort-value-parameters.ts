import BaseSortValue from '../sort-value-parameters';
import Callable from '@alirya/function/callable';

export default function SortValueParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Value, Value], number>
) : void {

    const sorted = BaseSortValue(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}
