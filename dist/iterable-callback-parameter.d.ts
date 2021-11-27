import Value from "@dikac/t-value/value";
import IterableContainer from "@dikac/t-iterable/iterable/iterable";
import MapContainer from "./map/map";
import Callback from "@dikac/t-function/callback/callback";
import Callable from "@dikac/t-function/callable";
export default function IterableCallbackParameter<Key, Val>({ iterable, callback, map }: IterableContainer<Iterable<Val>> & Partial<MapContainer<Map<Key, Val>>> & Callback<Callable<[Val], Key>>): Map<Key, Val>;
export default function IterableCallbackParameter<Key, Val>({ value, callback, map }: Value<Iterable<Val>> & Partial<MapContainer<Map<Key, Val>>> & Callback<Callable<[Val], Key>>): Map<Key, Val>;
