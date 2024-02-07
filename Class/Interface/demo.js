// interface demo the naming convetions in interface in typescript is 
// the name start with I and then name like IMove in java it will able at end
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Car is Moving...");
    };
    Car.prototype.run = function () {
        console.log("Car is Running...");
    };
    return Car;
}());
var c = new Car();
c.move();
c.run();
