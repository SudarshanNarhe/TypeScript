
// Write a code to show the static keyword with a variable and with a method

class StaticDemo{

    static bankName="SBI";

    static Addition(num1:number,num2:number):void{
        console.log(this.bankName+"\nAddition is : "+(num1+num2))
    }
}
console.log(StaticDemo.bankName);
StaticDemo.Addition(12,13);
