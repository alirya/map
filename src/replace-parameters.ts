/**
 * replace mat with another map
 *
 * replace value one by one without clearing destination
 *
 * @param destination
 * @param source
 * @constructor
 */
export default function ReplaceParameters<Key, Value>(
    destination: Map<Key, Value>,
    source : Map<Key, Value>
) : Map<Key, Value> {

    // remove destination which does not exist in source
    destination.forEach((value, key)=>{

        if(!source.has(key)) {

            destination.delete(key);
        }
    })

    source.forEach((value, key) => destination.set(key, value));

    return destination;
}
