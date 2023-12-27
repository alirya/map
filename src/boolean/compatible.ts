import Iterable from '@axiona/iterable/boolean/iterable.js';
import Object_ from '@axiona/object/boolean/object.js';
import {ExistsParameters} from '@axiona/object/property/boolean/exists.js';
import Method from '@axiona/object/boolean/method.js';
import List from '@axiona/array/boolean/list.js';

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


