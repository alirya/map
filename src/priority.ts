import SortValueParameters from "./sort-value-parameters";

export default class Priority<Key, Config extends Record<'priority', number> = Record<'priority', number>> extends Map<Key, Config> {

    private dirty : boolean = true;

    private rebuild() : void {

        if(!this.dirty) {

            return ;
        }

        // early dirty to prevent recursive call
        this.dirty = false;

        const sorted = SortValueParameters(this, (data1, data2)=>data2.priority - data1.priority);

        this.clear();

        for (const [value, priority] of sorted) {

            super.set(value, priority)
        }
    }

    [Symbol.iterator](): IterableIterator<[Key, Config]>{

        this.rebuild();
        return super[Symbol.iterator]();
    }

    set(key: Key, value: Config): this {

        this.dirty = true;
        return super.set(key, value);
    }

    entries(): IterableIterator<[Key, Config]> {

        this.rebuild();
        return super.entries();
    }

    forEach(callbackfn: (value: Config, key: Key, map: Priority<Key, Config>) => void, thisArg?: any): void {

        this.rebuild();
        return super.forEach(callbackfn, thisArg);
    }

    keys(): IterableIterator<Key> {

        this.rebuild();
        return super.keys();
    }

    values(): IterableIterator<Config> {

        this.rebuild();
        return super.values();
    }
}