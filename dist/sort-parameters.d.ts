import Callable from "@dikac/t-function/callable";
export default function SortParameters<Key, Value>(value: Map<Key, Value>, compare: Callable<[[key: Key, value: Value], [key: Key, value: Value]], number>): Map<Key, Value>;
