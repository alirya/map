import Callable from "@dikac/t-function/callable";
export default function SortParameters<Key, Value>(map: Map<Key, Value>, compare: Callable<[pair: [key: Key, value: Value], pair: [key: Key, value: Value]], number>): void;
