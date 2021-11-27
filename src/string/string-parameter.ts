import MapContainer from "../map/map";
import Value from "@dikac/t-value/value";
import Callable from "@dikac/t-function/callable";
import Separator from "@dikac/t-string/separator/separator";

export default function StringParameter (
    {
        map,
        value,
        separator,
        associativeSeparator,
    } : MapContainer<Map<string, string>> & Value<Map<string, string>> & Separator & {
        associativeSeparator : string
    }
) : string {

    let buffer : string[] = [];

    for(let [key, val] of (map || value)) {

        buffer.push(key + associativeSeparator + val);
    }

    return buffer.join(separator);
}


