import Callable from "@dikac/t-function/callable";
import MapContainer from "../map/map";
import Value from "@dikac/t-value/value";
export default function SortKeyParameter<Key, Val>({ map, compare }: MapContainer<Map<Key, Val>> & {
    compare: Callable<[Key, Key], number>;
}): void;
export default function SortKeyParameter<Key, Val>({ value, compare }: Value<Map<Key, Val>> & {
    compare: Callable<[Key, Key], number>;
}): void;
