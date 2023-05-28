var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract class
var Human = /** @class */ (function () {
    function Human(body, work) {
        this.body = body;
        this.work = work;
    }
    return Human;
}());
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment(body, work, livingArea) {
        var _this = _super.call(this, body, work) || this;
        _this.livingArea = livingArea;
        return _this;
    }
    Environment.prototype.display = function () {
        console.log("Human's full ".concat(this.body, " involve to make ").concat(this.work, " super fresh ").concat(this.livingArea, " living area"));
    };
    return Environment;
}(Human));
var thesis = new Environment("brain", 7, "Southern East");
thesis.display();
