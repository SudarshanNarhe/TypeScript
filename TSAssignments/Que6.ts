//6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().

//Assertion
let num6:any="1234"
// in assertion we cannot give type as a string
let convertednumber:number=<number>num6;

console.log("Assertion = "+convertednumber);

//Type Conversion
let str9:string="873";

let num8:number=parseInt(str9);

console.log("Type Conversion : "+num8)


//"1234ddd" if we take a value like these assertion will take a characters also in output
// because it not modify the data it only converted at runtime
// but in parseInt it will remove the characters and gives output only integers
// if we provide only characters parseInt give NaN


