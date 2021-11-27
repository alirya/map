export default function StringParameter({ map, value, separator, associativeSeparator, }) {
    let buffer = [];
    for (let [key, val] of (map || value)) {
        buffer.push(key + associativeSeparator + val);
    }
    return buffer.join(separator);
}
//# sourceMappingURL=string-parameter.js.map