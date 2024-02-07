//Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when a Bus object is created.

//2. Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the Bus is starting.  


class Bus1{
    make:string;
    model:string;
    year:number

    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year;
    }

     display():void {
        console.log("Make : "+this.make+"\nModel : "+this.model+"\nYear : "+this.year)
    }
    start():void{
        console.log("Bus is starting....")
    }

}

const obj=new Bus1("TATA","ST",1997);
obj.start();
obj.display();