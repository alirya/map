import IterableCallbackParameters from "./iterable-callback-parameters";
export default function IterableCallbackParameter({ value, iterable, callback, map = new Map() }) {
    return IterableCallbackParameters(iterable || value, callback, map);
}
//# sourceMappingURL=iterable-callback-parameter.js.map