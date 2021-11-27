/**
 * replace mat with another map
 *
 * replace value one by one without clearing destination
 *
 * @param destination
 * @param source
 * @constructor
 */
import ReplaceParameters from "./replace-parameters";

export default function ReplaceParameter<Key, Value>(
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
