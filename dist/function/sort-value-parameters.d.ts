import Callable from "@dikac/t-function/callable";
export default function SortValueParameters<Key, Value>(map: Map<Key, Value>, compare: Callable<[Value, Value], number>): void;
