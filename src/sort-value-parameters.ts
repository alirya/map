import Callable from '@alirya/function/callable';

export default function SortValueParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Value, Value], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return compare(value1[1], value2[1]);
    });

    return new Map<Key, Value>(sorted);
}
