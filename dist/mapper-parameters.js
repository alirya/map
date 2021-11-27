/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param converter
 */
export default function MapperParameters(value, 
//converter:(key: Key, value: Value)=>[MappedKey, MappedValue]
converter) {
    const result = new Map();
    value.forEach((value, key) => result.set(...converter(key, value)));
    return result;
}
//# sourceMappingURL=mapper-parameters.js.map