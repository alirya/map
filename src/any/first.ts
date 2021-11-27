export default function First<K, V>(map : Map<K, V>) : [K, V]|undefined {

    for (const [key, value] of map) {

        return [key, value];
    }

    return undefined;
}
