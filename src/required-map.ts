/**
 * Map which will not return undefined and provide default value
 */
export default interface RequiredMap<Key, Value>  extends Map<Key, Value> {

    get(key: Key): Value;

}
