

class Employee{

    id : number
    name : String

    constructor(id : number, name : String){
        this.id=id;
        this.name=name
    }

    // we mentioned return type like these
    display():void {
        console.log(this.id+"  "+this.name)
    }

    // this is return type
    showInfo():String{
        return 'This is the method who return value from showInfo'
    }

}

let std = new Employee(12,'Sudarshan')
std.display()
 let str : String = std.showInfo();

 console.log(str)

