import MapOfParameters from "./map-of-parameters";
import Guard from "@dikac/t-boolean/function/guard";
import MapOfParameter, {MapOfParameterArgument} from "./map-of-parameter";


namespace MapOf {

    export const Parameter = MapOfParameter;
    export const Parameters = MapOfParameters;
    export type Argument<Key, Value> = MapOfParameterArgument<Key, Value>;
}

export default MapOf;
