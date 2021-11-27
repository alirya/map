export default function SortParameters(value, compare) {
    const arrays = Array.from(value);
    const sorted = arrays.sort(compare);
    return new Map(sorted);
}
//# sourceMappingURL=sort-parameters.js.map