export default function Sort<Key, Value>(map: Map<Key, Value>, filter: (pair1: [key: Key, value: Value], pair2: [key: Key, value: Value]) => number): void;
