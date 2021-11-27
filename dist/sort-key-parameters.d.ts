import Callable from "@dikac/t-function/callable";
export default function SortKeyParameters<Key, Value>(map: Map<Key, Value>, filter: Callable<[Key, Key], number>): Map<Key, Value>;
