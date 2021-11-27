export default function IterableCallbackParameters<Key, Value>(value: Iterable<Value>, callback: (value: Value) => Key, map?: Map<Key, Value>): Map<Key, Value>;
