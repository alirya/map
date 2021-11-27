/**
 * @deprecated
 */
export default class TimeToLive extends Map {
    /**
     * @param milliseconds
     * time to live
     *
     * @param values
     */
    constructor(milliseconds, values) {
        super(values);
        this.milliseconds = milliseconds;
        this.timeouts = new Map();
    }
    get seconds() {
        return this.milliseconds / 1000;
    }
    set seconds(second) {
        this.milliseconds = second * 1000;
    }
    set(key, value) {
        this.clearTimeout(key);
        const timeout = setTimeout(() => {
            this.timeouts.delete(key);
            super.delete(key);
        }, this.milliseconds);
        this.timeouts.set(key, timeout);
        super.set(key, value);
        return this;
    }
    clearTimeout(value) {
        const timeout = this.timeouts.get(value);
        if (timeout) {
            clearTimeout(timeout);
            return true;
        }
        return false;
    }
    clear() {
        this.timeouts.forEach(value => clearTimeout(value));
        super.clear();
    }
    delete(key) {
        this.clearTimeout(key);
        this.timeouts.delete(key);
        return super.delete(key);
    }
}
//# sourceMappingURL=time-to-live.js.map