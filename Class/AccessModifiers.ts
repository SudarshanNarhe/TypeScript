// Access Modifiers 

// 1.private 

class Employee1{

    private sal : number=23000;
    display(): void{
        console.log("In private : "+this.sal)
    }
}

let em= new Employee1();
// console.log(em.sal);  // it will gives an error because private is only for within a class
em.display();

// 2 public 

class Employee2{

    public sal : number=23000;
    display(): void{
        console.log("In public : "+this.sal)
    }
}

let em2= new Employee2();
console.log(em2.sal) // the data member is public so it can access anywhere
em2.display();


// 3. Protected

class Employee3{

    protected sal : number=23000;
    // display(): void{
    //     console.log(this.sal)
    // }
}

class Manager1 extends Employee3{

    display(): void {
        console.log("In protected child : "+this.sal)
    }
}
let em4= new Employee3();
// console.log(em4.sal) // it will give error because it will aceess by same class or child class
let em3=new Manager1();
em3.display();

