import MapOfParameters from "./map-of-parameters";
import MapOfParameter, { MapOfParameterArgument } from "./map-of-parameter";
declare namespace MapOf {
    const Parameter: typeof MapOfParameter;
    const Parameters: typeof MapOfParameters;
    type Argument<Key, Value> = MapOfParameterArgument<Key, Value>;
}
export default MapOf;
