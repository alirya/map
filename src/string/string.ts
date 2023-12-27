import MapContainer from '../map/map.js';
import Separator from '@axiona/string/separator/separator.js';

export function StringParameters (
    map : Map<string, string>,
    delimiter : string,
    associativeDelimiter : string,
) : string {

    const buffer : string[] = [];

    for(const [key, value] of map) {

        buffer.push(key + associativeDelimiter + value);
    }

    return buffer.join(delimiter);
}

export type StringArgument = MapContainer<Map<string, string>> & Separator & {
    associativeSeparator : string
};

export function StringParameter (
    {
        map,
        separator,
        associativeSeparator,
    } : StringArgument
) : string {

    const buffer : string[] = [];

    for(const [key, val] of map) {

        buffer.push(key + associativeSeparator + val);
    }

    return buffer.join(separator);
}




namespace String {
    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
}
export default String;
