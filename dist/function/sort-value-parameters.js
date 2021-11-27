import BaseSortValue from "../sort-value-parameters";
export default function SortValueParameters(map, compare) {
    const sorted = BaseSortValue(map, compare);
    map.clear();
    for (const [key, value] of sorted.entries()) {
        map.set(key, value);
    }
}
//# sourceMappingURL=sort-value-parameters.js.map