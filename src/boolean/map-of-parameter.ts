import MapOfParameters from "./map-of-parameters";
import Guard from "@dikac/t-boolean/validation/guard";


export default function MapOfParameter<Key, Value>(
    map : Map<Key, Value>,
    {
        key,
        value,
    } : {
        key : (key:unknown)=>key is Key,
        value : (value:unknown)=>value is Value,
    }
) : map is Map<Key, Value> {

    return MapOfParameters(map, key, value)

}
