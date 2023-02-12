export default function JsonArray(map : Map<any, any>) : string {

    const array : [string, string][] = [];

    for(const [key, value] of map) {

        array.push([key, value]);
    }

    return JSON.stringify(array);
}
