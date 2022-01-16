import Guard from "@alirya/boolean/function/guard";

export default function MapOfParameters<Value>(
    map : Map<unknown, Value>,
    value : Guard<unknown, Value>,
) : map is Map<unknown, Value>;

export default function MapOfParameters<Key, Value>(
    map : Map<Key, Value>,
    value : Guard<unknown, Value>,
    key : Guard<unknown, Key>,
) : map is Map<Key, Value>;

export default function MapOfParameters<Key, Value>(
    map : Map<Key, Value>,
    value : Guard<unknown, Value>,
    key : Guard<unknown, Key> = function (v) {return true} as Guard<unknown, Key>,
) : map is Map<Key, Value> {

    for (let [k, v] of map) {

        if(!key(k)) {

            return false;
        }

        if(!value(v)) {

            return false;
        }
    }

    return true;

}
