//Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.
//2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  
var Bus1 = /** @class */ (function () {
    function Bus1(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus1.prototype.display = function () {
        console.log("Make : " + this.make + "\nModel : " + this.model + "\nYear : " + this.year);
    };
    Bus1.prototype.start = function () {
        console.log("Bus is starting....");
    };
    return Bus1;
}());
var obj = new Bus1("TATA", "ST", 1997);
obj.start();
obj.display();
