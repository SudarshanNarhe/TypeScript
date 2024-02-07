// write a code for a single level inheritance 

class Animal{

    running():String{
        return " is running "
    }

}

class Dog extends Animal{

    running1(): void {
        console.log("Dog"+super.running())
    }

}

let dog = new Dog();
dog.running1();