import BaseSortKey from "../sort-key-parameters";
export default function SortKeyParameters(map, compare) {
    const sorted = BaseSortKey(map, compare);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-key-parameters.js.map