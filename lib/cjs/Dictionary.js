"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this._items = {};
        this.add = (key, value) => this._items[key] = value;
        this.get = (key) => this._items[key];
        this.remove = (key) => delete this._items[key];
        this.containsKey = (key) => this._items.hasOwnProperty(key);
        this.count = () => Object.keys(this._items).length;
        this.keys = () => Object.keys(this._items);
        this.values = () => Object.keys(this._items).map(key => this._items[key]);
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map