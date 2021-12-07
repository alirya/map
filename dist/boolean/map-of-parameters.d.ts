import Guard from "@dikac/t-boolean/function/guard";
export default function MapOfParameters<Value>(map: Map<unknown, Value>, value: Guard<unknown, Value>): map is Map<unknown, Value>;
export default function MapOfParameters<Key, Value>(map: Map<Key, Value>, value: Guard<unknown, Value>, key: Guard<unknown, Key>): map is Map<Key, Value>;
