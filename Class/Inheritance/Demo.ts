

class Person{
    city : string ='Pune';
}

class Manager extends Person{
    
    display(): void {
        console.log(this.city)
    }
}

let mn= new Manager();
mn.display();