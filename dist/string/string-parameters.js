export default function StringParameters(map, delimiter, associativeDelimiter) {
    let buffer = [];
    for (let [key, value] of map) {
        buffer.push(key + associativeDelimiter + value);
    }
    return buffer.join(delimiter);
}
//# sourceMappingURL=string-parameters.js.map