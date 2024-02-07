//3. Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. Now, create a type Vehicle that represents either a Car or a Truck using a union type.

interface Car{
    make:string;
    model:string;
}

type Bus={
    make:"Volvo"
    model:"Electric"
    payloadCapacity:number;
}

// Define type Vehicle as a union type of Car and Bus
type Vehicle = Car | Bus;
  

const car: Car = {
  make: "TATA",
  model: "Nexon",
};

const bus: Bus = {
  make: "Volvo",
  model: "Electric",
  payloadCapacity: 50,
};


const vehicle1: Vehicle = car;
const vehicle2: Vehicle = bus;


console.log("Vehicle 1:", vehicle1);
console.log("Vehicle 2:", vehicle2);


