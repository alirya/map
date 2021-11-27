export default function IterableCallbackParameters<Key, Value>(
    value : Iterable<Value>,
    callback : (value : Value) => Key,
    map : Map<Key, Value> = new Map<Key, Value>()
) : Map<Key, Value> {

    for(const val of value) {

        map.set(callback(val), val);
    }

    return map;
}
