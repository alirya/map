import Callable from '@alirya/function/callable';
import MapContainer from '../map/map';
import Value from '@alirya/value/value';
import SortKeyParameters from './sorkey-parameters';

export default function SortKeyParameter<Key, Val>(
    {
        map,
        compare
    } : MapContainer<Map<Key, Val>> & {
        compare : Callable<[Key, Key], number>
    }
) : void;

export default function SortKeyParameter<Key, Val>(
    {
        value,
        compare
    } : Value<Map<Key, Val>> & {
        compare : Callable<[Key, Key], number>
    }
) : void;

export default function SortKeyParameter<Key, Val>(
    {
        map,
        value,
        compare
    } : MapContainer<Map<Key, Val>> & Value<Map<Key, Val>> & {
        compare : Callable<[Key, Key], number>
    }
) : void {

    SortKeyParameters(map || value, compare);
}
