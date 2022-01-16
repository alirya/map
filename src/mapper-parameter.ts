import Value from '@alirya/value/value';
import MapContainer from './map/map';
import Callable from '@alirya/function/callable';
import MapperParameters from './mapper-parameters';
/**
 * map a {@see Map} object
 *
 * Mapper name taken to avoid conflict with {@see Map}
 *
 * @param value
 * @param map
 */

export default function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        map,
        converter,
    } : MapContainer<Map<Key, Val>> & {
        converter: Callable<[key:Key, value:Val], [key:MappedKey, value:MappedValue]>
    }
) : Map<MappedKey, MappedValue>;

export default function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        value,
        converter,
    } : Value<Map<Key, Val>> & {
        converter: Callable<[key:Key, value:Val], [key:MappedKey, value:MappedValue]>
    }
) : Map<MappedKey, MappedValue>;

export default function MapperParameter<
    Key,
    Val,
    MappedKey,
    MappedValue,
>(
    {
        value,
        map,
        converter,
    } : Value<Map<Key, Val>> & MapContainer<Map<Key, Val>> & {
        converter: Callable<[key:Key, value:Val], [key:MappedKey, value:MappedValue]>
    }
) : Map<MappedKey, MappedValue> {

    return MapperParameters(map || value, converter);
}
