import Timeout = NodeJS.Timeout;

/**
 * @deprecated
 */
export default class RefreshInterval<Key, Value, Return = any> extends Map<Key, Value> {

    private timeout ?: Timeout;
    #milliseconds !: number;

    constructor(
        milliseconds : number,
        public callback : (set : RefreshInterval<Key, Value>) => Return,
        values?: readonly [Key, Value][],
        start = true
    ) {
        super(values);
        this.milliseconds = milliseconds;

        if(start) {

            this.start();
        }
    }

    restart(): void {

        this.stop();
        this.start();
    }

    stop(): void{

        if(this.timeout) {

            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
    }

    call() : Return {

        return this.callback(this);
    }

    protected next(): void {

        this.start();
    }

    start(): void {

        this.stop();

        this.timeout = setTimeout(()=>{

            this.call();
            this.next();

        }, this.#milliseconds);
    }

    get seconds() : number {

        return this.milliseconds / 1000;
    }

    set seconds(second : number) {

        this.milliseconds = second * 1000;
    }

    get milliseconds() : number {

        return this.#milliseconds;
    }

    set milliseconds(milliseconds : number) {

        this.#milliseconds = milliseconds;
    }

}
