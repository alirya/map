/**
 * replace mat with another map
 *
 * replace value one by one without clearing destination
 *
 * @param destination
 * @param source
 * @constructor
 */
export default function ReplaceParameters(destination, source) {
    // remove destination which does not exist in source
    destination.forEach((value, key) => {
        if (!source.has(key)) {
            destination.delete(key);
        }
    });
    source.forEach((value, key) => destination.set(key, value));
    return destination;
}
//# sourceMappingURL=replace-parameters.js.map