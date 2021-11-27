export default function SortValueParameters(map, compare) {
    const arrays = Array.from(map);
    const sorted = arrays.sort(function (value1, value2) {
        return compare(value1[1], value2[1]);
    });
    return new Map(sorted);
}
//# sourceMappingURL=sort-value-parameters.js.map