//4. Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details.
var Engine = /** @class */ (function () {
    function Engine(horsepower, fuelType) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(make, model, year, engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }
    // Method to start the car
    Car.prototype.start = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " is starting..."));
    };
    // Method to print both car and engine details
    Car.prototype.printCarDetails = function () {
        console.log("Car Details: ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
        console.log("Engine Details: ".concat(this.engine.horsepower, " HP, ").concat(this.engine.fuelType, " fuel"));
    };
    return Car;
}());
// Example usage
var carEngine = new Engine(200, "Gasoline");
var myCar = new Car("Toyota", "Camry", 2022, carEngine);
myCar.start();
myCar.printCarDetails();
