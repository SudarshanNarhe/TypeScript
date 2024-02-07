// write a code for the single inheritance with the realworld examples
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
var Person2 = /** @class */ (function () {
    function Person2(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person2.prototype.display = function () {
        return "Name : " + this.name + "\nAge : " + this.age + "\nGender : " + this.gender;
    };
    return Person2;
}());
var Employee5 = /** @class */ (function (_super) {
    __extends(Employee5, _super);
    function Employee5(name, age, gender, id, position, sal) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.id = id;
        _this.position = position;
        _this.sal = sal;
        return _this;
    }
    Employee5.prototype.display3 = function () {
        return _super.prototype.display.call(this) + "\nEmployee id : " + this.id + "\nEmployee Name : " + this.position + "\nSalary : " + this.sal;
    };
    return Employee5;
}(Person2));
var Manager5 = /** @class */ (function (_super) {
    __extends(Manager5, _super);
    function Manager5(name, age, gender, id, position, sal, department) {
        var _this = _super.call(this, name, age, gender, id, position, sal) || this;
        _this.department = department;
        return _this;
    }
    Manager5.prototype.display1 = function () {
        console.log(_super.prototype.display3.call(this) + "\nName Employee : " + this.name + "\nDepartment : " + this.department);
    };
    return Manager5;
}(Employee5));
var emp = new Manager5("Sudarshan", 24, "Male", 101, "Manager", 34000, "Developer");
emp.display1();
