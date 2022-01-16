import Callable from "@alirya/function/callable";

export default function SortParameters<Key, Value>(
    value : Map<Key, Value>,
    compare : Callable<[[key:Key, value:Value], [key:Key, value:Value]], number>
) : Map<Key, Value> {

    const arrays : [Key, Value][] = Array.from(value);

    const sorted = arrays.sort(compare);

    return new Map<Key, Value>(sorted)
}
