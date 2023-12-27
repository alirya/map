import Guard from '@axiona/boolean/function/guard.js';

export function MapOfParameters<Value>(
    map : Map<unknown, Value>,
    value : Guard<unknown, Value>,
) : map is Map<unknown, Value>;

export function MapOfParameters<Key, Value>(
    map : Map<Key, Value>,
    value : Guard<unknown, Value>,
    key : Guard<unknown, Key>,
) : map is Map<Key, Value>;

export function MapOfParameters<Key, Value>(
    map : Map<Key, Value>,
    value : Guard<unknown, Value>,
    key : Guard<unknown, Key> = function (v) {return true;} as Guard<unknown, Key>,
) : map is Map<Key, Value> {

    for (const [k, v] of map) {

        if(!key(k)) {

            return false;
        }

        if(!value(v)) {

            return false;
        }
    }

    return true;
}

export type MapOfArgument<Key, Value> = {

    key ?: Guard<unknown, Key>,
    value : Guard<unknown, Value>,
};

export function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        value,
    } : Omit<MapOfArgument<Key, Value>, 'key'>
) : map is Map<Key, Value>;

export function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        key,
        value,
    } : Required<MapOfArgument<Key, Value>>
) : map is Map<Key, Value>;

export function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        key,
        value,
    } : Required<MapOfArgument<Key, Value>> & Omit<MapOfArgument<Key, Value>, 'key'>
) : map is Map<Key, Value> {

    return MapOfParameters(map, value, key);

}


namespace MapOf {
    export const Parameters = MapOfParameters;
    export const Parameter = MapOfParameter;
}
export default MapOf;
