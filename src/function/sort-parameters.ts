import BaseSort from "../sort-parameters";
import Callable from "@dikac/t-function/callable";

export default function SortParameters<Key, Value>(
    map : Map<Key, Value>,
    compare : Callable<[pair:[key:Key, value:Value], pair:[key:Key, value:Value]], number>
) : void {

    const sorted = BaseSort(map, compare);

    map.clear();

    for(const [key, value] of sorted.entries()) {

        map.set(key, value);
    }

}
