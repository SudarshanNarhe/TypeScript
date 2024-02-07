// write a code to show the implementation of abstract class with the realworld example

abstract class Vehicle{

    abstract modelNo(): void;
    abstract color(): void;
    abstract type(): void;

}

class Bike extends Vehicle{
    modelNo(): void {
        console.log("Model No : 2435262")
    }
    type(): void {
        console.log("Type : 2 wheeler")
    }
    color(): void {
        console.log("Color : Blue")
    }
}

let b= new Bike();
b.modelNo();
b.type();
b.color();