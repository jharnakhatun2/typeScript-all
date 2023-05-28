"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ducks = void 0;
var Ducks = /** @class */ (function () {
    function Ducks(eggValue, duckNumber) {
        this.egg = eggValue;
        this.number = duckNumber;
    }
    Ducks.prototype.displayDuckData = function () {
        console.log("".concat(this.egg, ", ").concat(this.number));
    };
    return Ducks;
}());
exports.Ducks = Ducks;
