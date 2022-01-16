import Callable from '@alirya/function/callable';
import MapContainer from '../map/map';
import Value from '@alirya/value/value';
import SortParameters from './sort-parameters';

export default function SortParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : MapContainer<Map<Key, Val>> & Value<Map<Key, Val>> & {
        compare : Callable<[pair:[key:Key, value:Val], pair:[key:Key, value:Val]], number>
    }
) : void {

    SortParameters(map || value, compare);

}
