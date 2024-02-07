//5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.

let xyz="Suraj";

 //xyz=90;

// it will give error number value cannot assign to the string it will check at compile time 
console.log(xyz);  
// if we didn't declare the type a declaration type it will take at compile time

let abt=67;
console.log(abt)

let w=true
console.log(w);