//3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.  
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
var Car3 = /** @class */ (function () {
    function Car3(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car3.prototype.start = function () {
        console.log("The ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Car3;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(make, model, year, offRoadCapable) {
        var _this = _super.call(this, make, model, year) || this;
        _this.offRoadCapable = offRoadCapable;
        return _this;
    }
    SUV.prototype.toggleOffRoadCapability = function () {
        this.offRoadCapable = !this.offRoadCapable;
        var capabilityStatus = this.offRoadCapable ? "on" : "off";
        console.log("Off-road capability is now ".concat(capabilityStatus, " for the ").concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    };
    return SUV;
}(Car3));
var mySUV = new SUV('Jeep', 'Wrangler', 2023, true);
console.log("Make: ".concat(mySUV.make));
console.log("Model: ".concat(mySUV.model));
console.log("Year: ".concat(mySUV.year));
console.log("Off-road capable: ".concat(mySUV.offRoadCapable ? 'Yes' : 'No'));
mySUV.toggleOffRoadCapability();
