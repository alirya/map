import Function from "@dikac/t-function/function";

export default function Sort<Key, Value>(
    map : Map<Key, Value>,
    filter : Function<[[Key, Value], [Key, Value]], number>
) : void {

    let arrays : [Key, Value][] = Array.from(map);

    arrays.sort(filter);

    map.clear();

    for (let [key, value] of arrays) {

        map.set(key, value);
    }

}
