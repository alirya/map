import InferKey from './key/infer';
import InferValue from './value/infer';

export default class Wrapper<
    MapT extends Map<unknown, unknown>
> implements Map<InferKey<MapT>, InferValue<MapT>> {

    constructor(
        public map: MapT
    ) {
    }

    get [Symbol.toStringTag](): string {

        return this.map[Symbol.toStringTag];
    }

    get size(): number {

        return this.map.size;
    }

    has(key: InferKey<MapT>): boolean {

        return this.map.has(key);
    }

    [Symbol.iterator](): IterableIterator<[InferKey<MapT>, InferValue<MapT>]>{

        return <IterableIterator<[InferKey<MapT>, InferValue<MapT>]>> this.map[Symbol.iterator]();
    }

    clear(): void {

        this.map.clear();
    }

    delete(key: InferKey<MapT>): boolean {

        return this.map.delete(key);
    }

    entries(): IterableIterator<[InferKey<MapT>, InferValue<MapT>]> {

        return <IterableIterator<[InferKey<MapT>, InferValue<MapT>]>> this.map.entries();
    }

    forEach(callbackfn: (value: InferValue<MapT>, key: InferKey<MapT>, map: Map<InferKey<MapT>, InferValue<MapT>>) => void, thisArg?: any): void {

        return this.map.forEach(callbackfn, thisArg);
    }

    get(key: InferKey<MapT>): InferValue<MapT> | undefined {

        return <InferValue<MapT> | undefined> this.map.get(key);
    }

    keys(): IterableIterator<InferKey<MapT>> {

        return < IterableIterator<InferKey<MapT>>> this.map.keys();
    }

    set(key: InferKey<MapT>, value: InferValue<MapT>): this {

        this.map.set(key, value);
        return this;
    }

    values(): IterableIterator<InferValue<MapT>> {

        return <IterableIterator<InferValue<MapT>>> this.map.values();
    }
}
