import BaseSortKey from "../sort-key-parameters";
import Callable from "@dikac/t-function/callable";

export default function SortKeyParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[Key, Key], number>
) : void {

    const sorted = BaseSortKey(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }
}
