// Access Modifiers 
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
// 1.private 
var Employee1 = /** @class */ (function () {
    function Employee1() {
        this.sal = 23000;
    }
    Employee1.prototype.display = function () {
        console.log("In private : " + this.sal);
    };
    return Employee1;
}());
var em = new Employee1();
// console.log(em.sal);  // it will gives an error because private is only for within a class
em.display();
// 2 public 
var Employee2 = /** @class */ (function () {
    function Employee2() {
        this.sal = 23000;
    }
    Employee2.prototype.display = function () {
        console.log("In public : " + this.sal);
    };
    return Employee2;
}());
var em2 = new Employee2();
console.log(em2.sal); // the data member is public so it can access anywhere
em2.display();
// 3. Protected
var Employee3 = /** @class */ (function () {
    function Employee3() {
        this.sal = 23000;
        // display(): void{
        //     console.log(this.sal)
        // }
    }
    return Employee3;
}());
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager1.prototype.display = function () {
        console.log("In protected child : " + this.sal);
    };
    return Manager1;
}(Employee3));
var em4 = new Employee3();
// console.log(em4.sal) // it will give error because it will aceess by same class or child class
var em3 = new Manager1();
em3.display();
