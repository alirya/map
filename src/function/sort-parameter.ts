import BaseSort from "../sort-parameters";
import Callable from "@dikac/t-function/callable";
import MapContainer from "../map/map";
import Value from "@dikac/t-value/value";
import SortParameters from "./sort-parameters";

export default function SortParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : MapContainer<Map<Key, Val>> & Value<Map<Key, Val>> & {
        compare : Callable<[pair:[key:Key, value:Val], pair:[key:Key, value:Val]], number>
    }
) : void {

    SortParameters(map || value, compare);

}
