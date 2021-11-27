import MapContainer from "./map/map";
import Value from "@dikac/t-value/value";
import Callable from "@dikac/t-function/callable";
export default function SortValueParameter<Key, Val>({ map, compare, }: MapContainer<Map<Key, Val>> & {
    compare: Callable<[Key, Key], number>;
}): Map<Key, Val>;
export default function SortValueParameter<Key, Val>({ value, compare, }: Value<Map<Key, Value>> & {
    compare: Callable<[Key, Key], number>;
}): Map<Key, Val>;
