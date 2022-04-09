import Value from '@alirya/value/value';
import Wrapper from './wrapper';
import MapParameters from '@alirya/iterable/map-parameters';

export interface OnceValue<Type = unknown> extends Value<Type>   {
    once ?: boolean;
}

export default class Once<Key, Value extends OnceValue = OnceValue> extends Wrapper<Map<Key, Value>> {

    protected deleteOnce(key: Key) {

        const value = super.get(key);

        if(value && value.once) {

            this.delete(key);
        }
    }

    get(key: Key): Value | undefined {

        const value = super.get(key);
        this.deleteOnce(key);

        return value;
    }

    set(value: Key, config: Value ): this {

        return super.set(value, config);
    }

    * [Symbol.iterator](): IterableIterator<[Key, Value]>{

        for(const pair of super[Symbol.iterator]()) {

            this.deleteOnce(pair[0]);
            yield pair;
        }
    }


    * entries(): IterableIterator<[Key, Value]> {

        for(const pair of super.entries()) {

            this.deleteOnce(pair[0]);
            yield pair;
        }
    }

    forEach(callback: (value: Value, key: Key, map: Once<Key, Value>) => void, thisArg?: any): void {

        return super.forEach((value, key, map : Once<Key, Value>) => {

            this.deleteOnce(key);
            callback(value, key, map);

        }, thisArg);
    }

    * values(): IterableIterator<Value> {

        yield * MapParameters(this, ([, value])=>value);
    }
}