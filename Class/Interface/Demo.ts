// interface demo the naming convetions in interface in typescript is 
// the name start with I and then name like IMove in java it will able at end

interface IMove {
    move(): void;
    run(): void;
}

class Car implements IMove{

    move(): void {
        console.log("Car is Moving...")
    }
    run(): void {
        console.log("Car is Running...")
    }
    
}

let c= new Car();
c.move();
c.run();
