//3. Write a TypeScript program that defines a TypeScript interface Car with properties make and model of type string. Create a type Bus with properties make and model of type string and an additional property payloadCapacity of type number. Now, create a type Vehicle that represents either a Car or a Truck using a union type.
var car = {
    make: "TATA",
    model: "Nexon",
};
var bus = {
    make: "Volvo",
    model: "Electric",
    payloadCapacity: 50,
};
var vehicle1 = car;
var vehicle2 = bus;
console.log("Vehicle 1:", vehicle1);
console.log("Vehicle 2:", vehicle2);
