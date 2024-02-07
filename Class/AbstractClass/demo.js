// abstract class demo
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
var Cards = /** @class */ (function () {
    function Cards(price) {
        console.log("In Abs class const Price is : " + price);
    }
    return Cards;
}());
var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo(p) {
        return _super.call(this, p) || this;
    }
    Demo.prototype.invitiation = function () {
        console.log("This is my Birthday Invitation");
    };
    return Demo;
}(Cards));
var ab = new Demo(2300);
ab.invitiation();
