import MapOfParameters from "./map-of-parameters";
import Guard from "@alirya/boolean/function/guard";

export type MapOfParameterArgument<Key, Value> = {

    key ?: Guard<unknown, Key>,
    value : Guard<unknown, Value>,
}

export default function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        value,
    } : Omit<MapOfParameterArgument<Key, Value>, 'key'>
) : map is Map<Key, Value>

export default function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        key,
        value,
    } : Required<MapOfParameterArgument<Key, Value>>
) : map is Map<Key, Value>

export default function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        key,
        value,
    } : Required<MapOfParameterArgument<Key, Value>> & Omit<MapOfParameterArgument<Key, Value>, 'key'>
) : map is Map<Key, Value> {

    return MapOfParameters(map, value, key)

}
