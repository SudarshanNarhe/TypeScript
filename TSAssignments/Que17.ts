//3. Write a TypeScript class called SUV (Sports Utility Vehicle) that extends the Car class. Add a property to represent whether the SUV is suitable for off-road driving. Implement a method that toggles off-road capability and prints a message accordingly.  

class Car3 {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log(`The ${this.year} ${this.make} ${this.model} is starting.`);
    }
  }
  
  class SUV extends Car3 {
    offRoadCapable: boolean;
  
    constructor(make: string, model: string, year: number, offRoadCapable: boolean) {
      super(make, model, year);
      this.offRoadCapable = offRoadCapable;
    }
  
    toggleOffRoadCapability(): void {
      this.offRoadCapable = !this.offRoadCapable;
      const capabilityStatus = this.offRoadCapable ? "on" : "off";
      console.log(`Off-road capability is now ${capabilityStatus} for the ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
 
  const mySUV = new SUV('Jeep', 'Wrangler', 2023, true);
  
  console.log(`Make: ${mySUV.make}`);
  console.log(`Model: ${mySUV.model}`);
  console.log(`Year: ${mySUV.year}`);
  console.log(`Off-road capable: ${mySUV.offRoadCapable ? 'Yes' : 'No'}`);
  
  mySUV.toggleOffRoadCapability();