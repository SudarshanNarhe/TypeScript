// let scope 
var num1 = 78;
function show() {
    var num2 = 99;
    console.log(num1 + " " + num2);
}
show();
console.log(num1);
// console.log(num2)    //it gives error because scope is till the block 
