// abstract class demo

abstract class Cards{
    abstract invitiation():void;
    constructor (price : number){
        console.log("In Abs class const Price is : "+price)
    }
}

class Demo extends Cards{

    constructor(p: number){
        super(p);
    }

    invitiation(): void {
        console.log("This is my Birthday Invitation")
    }
}

let ab = new Demo(2300);
ab.invitiation();