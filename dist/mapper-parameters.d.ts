import Callable from "@dikac/t-function/callable";
/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param converter
 */
export default function MapperParameters<Key, Value, MappedKey, MappedValue>(value: Map<Key, Value>, converter: Callable<[key: Key, value: Value], [key: MappedKey, value: MappedValue]>): Map<MappedKey, MappedValue>;
