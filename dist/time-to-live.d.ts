/**
 * @deprecated
 */
export default class TimeToLive<Key, Value> extends Map<Key, Value> {
    milliseconds: number;
    private timeouts;
    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(milliseconds: number, values?: readonly [Key, Value][]);
    get seconds(): number;
    set seconds(second: number);
    set(key: Key, value: Value): this;
    private clearTimeout;
    clear(): void;
    delete(key: Key): boolean;
}
