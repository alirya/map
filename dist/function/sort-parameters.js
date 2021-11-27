import BaseSort from "../sort-parameters";
export default function SortParameters(map, compare) {
    const sorted = BaseSort(map, compare);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-parameters.js.map