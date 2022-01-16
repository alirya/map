import Callable from "@alirya/function/callable";

export default function SortKeyParameters<Key, Value>(
    map : Map<Key, Value>,
    filter : Callable<[Key, Key], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(map);

    const sorted = arrays.sort(function(value1, value2) {

        return filter(value1[0], value2[0]);
    });

    return new Map<Key, Value>(sorted);
}

