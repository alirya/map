import Timeout = NodeJS.Timeout;

/**
 * @deprecated
 */
export default class TimeToLive<Key, Value> extends Map<Key, Value> {

    private timeouts : Map<Key, Timeout> = new Map<Key, Timeout>();

    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(
        public milliseconds : number,
        values?: readonly [Key, Value][]
    ) {
        super(values);
    }

    get seconds() : number {

        return this.milliseconds / 1000;
    }

    set seconds(second : number) {

        this.milliseconds = second * 1000;
    }

    set(key: Key, value: Value): this {

        this.clearTimeout(key);

        const timeout = setTimeout(()=>{

            this.timeouts.delete(key);
            super.delete(key);

        }, this.milliseconds);

        this.timeouts.set(key, timeout);
        super.set(key, value);

        return this;
    }

    private clearTimeout(value: Key) : boolean {

        const timeout = this.timeouts.get(value);

        if(timeout) {

            clearTimeout(timeout);
            return true;
        }

        return false;
    }

    clear(): void {

        this.timeouts.forEach(value => clearTimeout(value));
        super.clear();
    }

    delete(key: Key): boolean {

        this.clearTimeout(key);
        this.timeouts.delete(key);
        return super.delete(key);
    }

}
