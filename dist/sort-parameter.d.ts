import Callable from "@dikac/t-function/callable";
import Value from "@dikac/t-value/value";
import MapContainer from "./map/map";
export default function SortParameter<Key, Val>({ map, compare, }: MapContainer<Map<Key, Val>> & {
    compare: Callable<[[key: Key, value: Val], [key: Key, value: Val]], number>;
}): Map<Key, Val>;
export default function SortParameter<Key, Val>({ value, compare, }: Value<Map<Key, Val>> & {
    compare: Callable<[[key: Key, value: Val], [key: Key, value: Val]], number>;
}): Map<Key, Val>;
