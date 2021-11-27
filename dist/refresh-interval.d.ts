/**
 * @deprecated
 */
export default class RefreshInterval<Key, Value, Return = any> extends Map<Key, Value> {
    #private;
    callback: (set: RefreshInterval<Key, Value>) => Return;
    private timeout?;
    constructor(milliseconds: number, callback: (set: RefreshInterval<Key, Value>) => Return, values?: readonly [Key, Value][], start?: boolean);
    restart(): void;
    stop(): void;
    call(): Return;
    protected next(): void;
    start(): void;
    get seconds(): number;
    set seconds(second: number);
    get milliseconds(): number;
    set milliseconds(milliseconds: number);
}
