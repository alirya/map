export default function SortKeyParameters(map, filter) {
    const arrays = Array.from(map);
    const sorted = arrays.sort(function (value1, value2) {
        return filter(value1[0], value2[0]);
    });
    return new Map(sorted);
}
//# sourceMappingURL=sort-key-parameters.js.map