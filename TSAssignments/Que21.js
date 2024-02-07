/**7. Write a TypeScript class called Shape with properties like color.
 *  Implement a constructor that initializes the color property when a Shape object is created.
 * Then, create a derived class Circle that extends Shape. Implement a constructor for the Circle class
 * that takes color and radius as parameters and initializes them along with the color property
 * of the base class.
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
var Shape1 = /** @class */ (function () {
    function Shape1(color) {
        this.color = color;
    }
    return Shape1;
}());
var Circle1 = /** @class */ (function (_super) {
    __extends(Circle1, _super);
    function Circle1(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle1.prototype.displayDetails = function () {
        console.log("Circle Details:");
        console.log("  Color: ".concat(this.color));
        console.log("  Radius: ".concat(this.radius));
    };
    return Circle1;
}(Shape1));
var redCircle1 = new Circle1('Red', 5);
redCircle1.displayDetails();
