//4. Write a TypeScript class that defines a base class Car with properties like make, model, and year, along with a start() method that prints a starting message. Now create a class called Engine with the properties horsepower and fuelType. Modify the Car class to include an instance of the Engine class as a property. Implement a method printCarDetails() in the Car class that prints both car and engine details.

class Engine {
    constructor(public horsepower: number, public fuelType: string) {}
  }
  
  class Car1 {
    // Properties of the Car class
    make: string;
    model: string;
    year: number;
    
    // Engine instance as a property of Car
    engine: Engine;
  
    constructor(make: string, model: string, year: number, engine: Engine) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.engine = engine;
    }
  
    // Method to start the car
    start(): void {
      console.log(`The ${this.make} ${this.model} is starting...`);
    }
  
    // Method to print both car and engine details
    printCarDetails(): void {
      console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
      console.log(`Engine Details: ${this.engine.horsepower} HP, ${this.engine.fuelType} fuel`);
    }
  }
  
  // Example usage
  const carEngine = new Engine(200, "Gasoline");
  const myCar = new Car1("Toyota", "Camry", 2022, carEngine);
  
  myCar.start(); 
  myCar.printCarDetails();
  
  