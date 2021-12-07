export default function MapOfParameters(map, value, key = function (v) { return true; }) {
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