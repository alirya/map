import MapContainer from '../map/map';
import Separator from '@alirya/string/separator/separator';

export default function StringParameter (
    {
        map,
        separator,
        associativeSeparator,
    } : MapContainer<Map<string, string>> & Separator & {
        associativeSeparator : string
    }
) : string {

    let buffer : string[] = [];

    for(let [key, val] of map) {

        buffer.push(key + associativeSeparator + val);
    }

    return buffer.join(separator);
}


