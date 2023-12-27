import Value from '@axiona/value/value.js';
import MapContainer from './map/map.js';
import Callable from '@axiona/function/callable.js';

/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param converter
 */
export function MapperParameters<
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

export type MapperArgumentMap<
    Key,
    Val,
    MappedKey,
    MappedValue
> = MapContainer<Map<Key, Val>> & {
    converter: Callable<[key:Key, value:Val], [key:MappedKey, value:MappedValue]>
};

export type MapperArgumentValue<
    Key,
    Val,
    MappedKey,
    MappedValue
> = Value<Map<Key, Val>> & {
    converter: Callable<[key:Key, value:Val], [key:MappedKey, value:MappedValue]>
};

export type MapperArgument<Key, Val, MappedKey, MappedValue> =
    MapperArgumentMap<Key, Val, MappedKey, MappedValue> |
    MapperArgumentValue<Key, Val, MappedKey, MappedValue>;


/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param map
 */

export function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        map,
        converter,
    } : MapperArgumentMap<Key, Val, MappedKey, MappedValue>
) : Map<MappedKey, MappedValue>;

export function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        value,
        converter,
    } : MapperArgumentValue<Key, Val, MappedKey, MappedValue>
) : Map<MappedKey, MappedValue>;

export function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        value,
        map,
        converter,
    } : MapperArgumentMap<Key, Val, MappedKey, MappedValue> & MapperArgumentValue<Key, Val, MappedKey, MappedValue>
) : Map<MappedKey, MappedValue> {

    return MapperParameters(map || value, converter);
}


namespace Mapper {
    export const Parameters = MapperParameters;
    export const Parameter = MapperParameter;
    export type ArgumentMap<Key, Val, MappedKey, MappedValue> = MapperArgumentMap<Key, Val, MappedKey, MappedValue>;
    export type ArgumentValue<Key, Val, MappedKey, MappedValue> = MapperArgumentValue<Key, Val, MappedKey, MappedValue>;
    export type Argument<Key, Val, MappedKey, MappedValue> = MapperArgument<Key, Val, MappedKey, MappedValue>;
}
export default Mapper;
