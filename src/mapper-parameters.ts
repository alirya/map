import Callable from "@alirya/function/callable";

/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param converter
 */
export default function MapperParameters<
    Key,
    Value,
    MappedKey,
    MappedValue,
>(
    value: Map<Key, Value>,
    converter : Callable<[key:Key, value:Value], [key:MappedKey, value:MappedValue]>
) : Map<MappedKey, MappedValue> {

    const result = new Map<MappedKey, MappedValue>();

    value.forEach((value, key) => result.set(...converter(key, value)));

    return result;
}
