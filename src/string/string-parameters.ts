export default function StringParameters (
    map : Map<string, string>,
    delimiter : string,
    associativeDelimiter : string,
) : string {

    let buffer : string[] = [];

    for(let [key, value] of map) {

        buffer.push(key + associativeDelimiter + value);
    }

    return buffer.join(delimiter);
}


