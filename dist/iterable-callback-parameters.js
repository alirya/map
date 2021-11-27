export default function IterableCallbackParameters(value, callback, map = new Map()) {
    for (const val of value) {
        map.set(callback(val), val);
    }
    return map;
}
//# sourceMappingURL=iterable-callback-parameters.js.map