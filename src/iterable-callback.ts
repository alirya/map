import Value from '@alirya/value/value';
import IterableContainer from '@alirya/iterable/iterable/iterable';
import MapContainer from './map/map';
import Callback from '@alirya/function/callback/callback';
import Callable from '@alirya/function/callable';

export function IterableCallbackParameters<Key, Value>(
    value : Iterable<Value>,
    callback : (value : Value) => Key,
    map : Map<Key, Value> = new Map<Key, Value>()
) : Map<Key, Value> {

    for(const val of value) {

        map.set(callback(val), val);
    }

    return map;
}

export type IterableCallbackArgumentMap<Key, Val> =
    IterableContainer<Iterable<Val>> &
    Partial<MapContainer<Map<Key, Val>>> &
    Callback<Callable<[Val], Key>>;

export type IterableCallbackArgumentValue<Key, Val> =
    Value<Iterable<Val>> &
    Partial<MapContainer<Map<Key, Val>>> &
    Callback<Callable<[Val], Key>>;

export type IterableCallbackArgument<Key, Val> =
    IterableCallbackArgumentMap<Key, Val> &
    IterableCallbackArgumentValue<Key, Val>;

export function IterableCallbackParameter<Key, Val>(
    {
        iterable,
        callback,
        map
    } : IterableCallbackArgumentMap<Key, Val>
) : Map<Key, Val> ;

export function IterableCallbackParameter<Key, Val>(
    {
        value,
        callback,
        map
    } : IterableCallbackArgumentValue<Key, Val>
) : Map<Key, Val>;

export function IterableCallbackParameter<Key, Val>(
    {
        value,
        iterable,
        callback,
        map = new Map<Key, Val>()
    } : IterableCallbackArgumentMap<Key, Val> & IterableCallbackArgumentValue<Key, Val>
) : Map<Key, Val> {

    return IterableCallbackParameters(iterable || value, callback, map);
}


namespace IterableCallback {
    export const Parameters = IterableCallbackParameters;
    export const Parameter = IterableCallbackParameter;
    export type ArgumentMap<Key, Val> = IterableCallbackArgumentMap<Key, Val>;
    export type ArgumentValue<Key, Val> = IterableCallbackArgumentValue<Key, Val>;
    export type Argument<Key, Val> = IterableCallbackArgument<Key, Val>;
}
export default IterableCallback;
