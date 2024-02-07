// write a code for the multilevel inheritance with the realworld examples

class Person2{
    name : string
    age : number
    gender : string

    constructor(name : string, age : number, gender : string){
        this.name=name;
        this.age=age;
        this.gender=gender
    }

    display():string{
        return "Name : "+this.name+"\nAge : "+this.age+"\nGender : "+this.gender
    }
}

class Employee5 extends Person2{
    id : number;
    position : String;
    sal : number;

    constructor(name : string, age : number, gender : string,id : number,position : String, sal: number){
        super(name,age, gender)
        this.id=id;
        this.position=position;
        this.sal=sal
    }

    display3(): String{
        return super.display()+"\nEmployee id : "+this.id+"\nEmployee Name : "+this.position+"\nSalary : "+this.sal;
    }
}

class Manager5 extends Employee5{

    department : String;

    constructor(name : string, age : number, gender : string,id : number,position : String, sal: number, department : String){
        super(name,age,gender,id,position,sal)
        this.department=department
    }

    display1(): void {
        console.log(super.display3()+"\nName Employee : "+this.name+"\nDepartment : "+this.department)
    }

}
let emp = new Manager5("Sudarshan",24,"Male",101,"Manager",34000,"Developer");
emp.display1();


