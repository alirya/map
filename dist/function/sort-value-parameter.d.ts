import Callable from "@dikac/t-function/callable";
import MapContainer from "../map/map";
import Value from "@dikac/t-value/value";
export default function SortValueParameter<Key, Val>({ map, compare }: MapContainer<Map<Key, Val>> & {
    compare: Callable<[Val, Val], number>;
}): void;
export default function SortValueParameter<Key, Val>({ value, compare }: Value<Map<Key, Value>> & {
    compare: Callable<[Val, Val], number>;
}): void;
