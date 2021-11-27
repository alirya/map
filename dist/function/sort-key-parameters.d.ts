import Callable from "@dikac/t-function/callable";
export default function SortKeyParameters<Key, Value>(map: Map<Key, Value>, compare: Callable<[Key, Key], number>): void;
