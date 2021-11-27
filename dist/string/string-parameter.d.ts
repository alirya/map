import MapContainer from "../map/map";
import Value from "@dikac/t-value/value";
import Separator from "@dikac/t-string/separator/separator";
export default function StringParameter({ map, value, separator, associativeSeparator, }: MapContainer<Map<string, string>> & Value<Map<string, string>> & Separator & {
    associativeSeparator: string;
}): string;
