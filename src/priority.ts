import {SortValueParameters} from "./void/sort-value";
import Value from '@alirya/value/value';
import Wrapper from './wrapper';

export interface PriorityValue<Type = unknown> extends Value<Type>   {
    priority ?: number;
}

export default class Priority<Key, Value extends PriorityValue = PriorityValue> extends Wrapper<Map<Key, Value>> {

    private dirty : boolean = true;

    private rebuild() : void {

        if(!this.dirty) {

            return ;
        }

        // early dirty to prevent recursive call
        this.dirty = false;

       SortValueParameters(
            this,
            (data1, data2) => (data2.priority ?? 0) - (data1.priority ?? 0)
        );

    }

    [Symbol.iterator](): IterableIterator<[Key, Value]>{

        this.rebuild();
        return super[Symbol.iterator]();
    }


    /**
     * set value with given config
     *
     * @param value
     * @param config
     * priority default to 0 if not set
     */
    set(value: Key, config: Value ): this {

        this.dirty = true;
        return super.set(value, config);
    }

    entries(): IterableIterator<[Key, Value]> {

        this.rebuild();
        return super.entries();
    }

    forEach(callbackfn: (value: Value, key: Key, map: Priority<Key, Value>) => void, thisArg?: any): void {

        this.rebuild();
        return super.forEach(callbackfn, thisArg);
    }

    keys(): IterableIterator<Key> {

        this.rebuild();
        return super.keys();
    }

    values(): IterableIterator<Value> {

        this.rebuild();
        return super.values();
    }
}
