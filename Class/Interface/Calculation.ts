/**write a code to create an interface. Interface contain one variable and one abstract method.
 * Create one class which also contain one variable.
 * Create one child class which perform the addition of two variables which is from Interface and class
 * and perform the addition into the method which is present in interface
 */

interface performOperations{
    num1 : number;
    addition():void;
}

class anotherNum{
    num2 : number;
    constructor(num2:number){
        this.num2=num2
    }
}

class Addition extends anotherNum implements performOperations{
    num1: number;
    constructor(num1 : number,num2 : number){
        super(num2)
        this.num1=num1
    }
    
    addition(): void {
        console.log("Addition is : "+(this.num1+this.num2))
    }
}

let add = new Addition(23,78);
add.addition();