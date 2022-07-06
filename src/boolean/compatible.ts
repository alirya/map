import Iterable from '@alirya/iterable/boolean/iterable.js';
import Object_ from '@alirya/object/boolean/object.js';
import {ExistsParameters} from '@alirya/object/property/boolean/exists.js';
import Method from '@alirya/object/boolean/method.js';
import List from '@alirya/array/boolean/list.js';

export default function Compatible(value : any) : value is Map<any, any> {

    if(!Object_(value)) {

        return false;
    }

    if(!ExistsParameters(value, 'size')) {

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


