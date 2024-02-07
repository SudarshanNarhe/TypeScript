/**write a code to create an interface. Interface contain one variable and one abstract method.
 * Create one class which also contain one variable.
 * Create one child class which perform the addition of two variables which is from Interface and class
 * and perform the addition into the method which is present in interface
 */
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
var anotherNum = /** @class */ (function () {
    function anotherNum(num2) {
        this.num2 = num2;
    }
    return anotherNum;
}());
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition(num1, num2) {
        var _this = _super.call(this, num2) || this;
        _this.num1 = num1;
        return _this;
    }
    Addition.prototype.addition = function () {
        console.log("Addition is : " + (this.num1 + this.num2));
    };
    return Addition;
}(anotherNum));
var add = new Addition(23, 78);
add.addition();
