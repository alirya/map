import SortValueParameters from "./sort-value-parameters";

export default class Priority<Key> extends Map<Key, number> {

    private dirty : boolean = true;

    private rebuild() : void {

        if(!this.dirty) {

            return ;
        }

        // early dirty to prevent recursive call
        this.dirty = false;

        const sorted = SortValueParameters(this, (data1, data2)=>data2-data1);

        this.clear();

        for (const [value, priority] of sorted) {

            super.set(value, priority)
        }
    }

    [Symbol.iterator](): IterableIterator<[Key, number]>{

        this.rebuild();
        return super[Symbol.iterator]();
    }

    set(key: Key, value: number): this {

        this.dirty = true;
        return super.set(key, value);
    }

    entries(): IterableIterator<[Key, number]> {

        this.rebuild();
        return super.entries();
    }

    forEach(callbackfn: (value: number, key: Key, map: Priority<Key>) => void, thisArg?: any): void {

        this.rebuild();
        return super.forEach(callbackfn, thisArg);
    }

    keys(): IterableIterator<Key> {

        this.rebuild();
        return super.keys();
    }

    values(): IterableIterator<number> {

        this.rebuild();
        return super.values();
    }
}