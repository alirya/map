var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _milliseconds;
/**
 * @deprecated
 */
export default class RefreshInterval extends Map {
    constructor(milliseconds, callback, values, start = true) {
        super(values);
        this.callback = callback;
        _milliseconds.set(this, void 0);
        this.milliseconds = milliseconds;
        if (start) {
            this.start();
        }
    }
    restart() {
        this.stop();
        this.start();
    }
    stop() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
    }
    call() {
        return this.callback(this);
    }
    next() {
        this.start();
    }
    start() {
        this.stop();
        this.timeout = setTimeout(() => {
            this.call();
            this.next();
        }, __classPrivateFieldGet(this, _milliseconds));
    }
    get seconds() {
        return this.milliseconds / 1000;
    }
    set seconds(second) {
        this.milliseconds = second * 1000;
    }
    get milliseconds() {
        return __classPrivateFieldGet(this, _milliseconds);
    }
    set milliseconds(milliseconds) {
        __classPrivateFieldSet(this, _milliseconds, milliseconds);
    }
}
_milliseconds = new WeakMap();
//# sourceMappingURL=refresh-interval.js.map