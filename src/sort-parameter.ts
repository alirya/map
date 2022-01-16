import Callable from '@alirya/function/callable';
import Value from '@alirya/value/value';
import MapContainer from './map/map';
import SortParameters from './sorparameters';

export default function SortParameter<Key, Val>(
    {
        map,
        compare,
    } : MapContainer<Map<Key, Val>> & {
        compare : Callable<[[key:Key, value:Val], [key:Key, value:Val]], number>,
    }
) : Map<Key, Val>;

export default function SortParameter<Key, Val>(
    {
        value,
        compare,
    } : Value<Map<Key, Val>> & {
        compare : Callable<[[key:Key, value:Val], [key:Key, value:Val]], number>,
    }
) : Map<Key, Val>;

export default function SortParameter<Key, Val>(
    {
        value,
        map,
        compare,
    } : Value<Map<Key, Val>> & MapContainer<Map<Key, Val>> & {
        compare : Callable<[[key:Key, value:Val], [key:Key, value:Val]], number>,
    }
) : Map<Key, Val> {

    return SortParameters(map || value, compare);
}
