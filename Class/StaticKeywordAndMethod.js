// Write a code to show the static keyword with a variable and with a method
var StaticDemo = /** @class */ (function () {
    function StaticDemo() {
    }
    StaticDemo.Addition = function (num1, num2) {
        console.log(this.bankName + "\nAddition is : " + (num1 + num2));
    };
    StaticDemo.bankName = "SBI";
    return StaticDemo;
}());
console.log(StaticDemo.bankName);
StaticDemo.Addition(12, 13);
