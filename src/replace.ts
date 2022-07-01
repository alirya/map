/**
 * replace mat with another map
 *
 * replace value one by one without clearing destination
 *
 * @param destination
 * @param source
 * @constructor
 */
export function ReplaceParameters<Key, Value>(
    destination: Map<Key, Value>,
    source : Map<Key, Value>
) : Map<Key, Value> {

    // remove destination which does not exist in source
    destination.forEach((value, key)=>{

        if(!source.has(key)) {

            destination.delete(key);
        }
    });

    source.forEach((value, key) => destination.set(key, value));

    return destination;
}

/**
 * replace mat with another map
 *
 * replace value one by one without clearing destination
 *
 * @param destination
 * @param source
 * @constructor
 */

export function ReplaceParameter<Key, Value>(
    {
        destination,
        source,
    } : {
        destination: Map<Key, Value>,
        source : Map<Key, Value>,
    }
) : Map<Key, Value> {

    return ReplaceParameters(destination, source);
}


namespace Replace {
    export const Parameters = ReplaceParameters;
    export const Parameter = ReplaceParameter;
}
export default Replace;
