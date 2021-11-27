export default function MapOfParameters<Key, Value>(map: Map<Key, Value>, key: (key: unknown) => key is Key, value: (value: unknown) => value is Value): map is Map<Key, Value>;
