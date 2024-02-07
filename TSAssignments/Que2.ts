//2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.

let ab=23;

var av=56;

const ac=90;


    if(ab<av){
        let al=89;
        var tr=78;
        const bc2=87;
        ab=43;
        av=67;
    //   ac =17;  // we cannot modify the ac because its a constant variable which we cannot modify 
    }

console.log("let outside "+ab)
// console.log("let inside "+al)  // we cannot access let outside the block
console.log("var outside "+av)
// console.log("var inside "+tr) 
// it access the value of varible but it gives a warning
//it dont have a function scope it not access outside the function but can access multiple block also
console.log("const outside "+ac)
// console.log("const inside "+bc2)  // we cannot access const outside the block