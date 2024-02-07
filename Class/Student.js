var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    // we mentioned return type like these
    Employee.prototype.display = function () {
        console.log(this.id + "  " + this.name);
    };
    // this is return type
    Employee.prototype.showInfo = function () {
        return 'This is the method who return value from showInfo';
    };
    return Employee;
}());
var std = new Employee(12, 'Sudarshan');
std.display();
var str = std.showInfo();
console.log(str);
