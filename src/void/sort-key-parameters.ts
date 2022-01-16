import BaseSortKey from "../sorkey-parameters";
import Callable from "@alirya/function/callable";

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
