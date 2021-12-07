import Guard from "@dikac/t-boolean/function/guard";
export declare type MapOfParameterArgument<Key, Value> = {
    key?: Guard<unknown, Key>;
    value: Guard<unknown, Value>;
};
export default function MapOfParameter<Key, Value>(map: Map<Key, Value>, { value, }: Omit<MapOfParameterArgument<Key, Value>, 'key'>): map is Map<Key, Value>;
export default function MapOfParameter<Key, Value>(map: Map<Key, Value>, { key, value, }: Required<MapOfParameterArgument<Key, Value>>): map is Map<Key, Value>;
