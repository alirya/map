export default function MapOfParameters(map, key, value) {
    for (let [k, v] of map) {
        if (!key(k)) {
            return false;
        }
        if (!value(v)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=map-of-parameters.js.map