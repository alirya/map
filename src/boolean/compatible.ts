import Iterable from "@alirya/iterable/boolean/iterable";
import Object_ from "@alirya/object/boolean/object";
import Property from "@alirya/object/property/boolean/exists";
import Method from "@alirya/object/boolean/method";
import List from "@alirya/array/boolean/list";

export default function Compatible(value : any) : value is Map<any, any> {

    if(!Object_(value)) {

        return false;
    }

    if(!Property(value, 'size')) {

        return false;
    }

    if(!List(['clear', 'delete', 'forEach', 'get', 'has', 'set'], (property) => Method(value, property))) {

        return false;
    }

    if(!Iterable(value)) {

        return false;
    }

    return true;
}


