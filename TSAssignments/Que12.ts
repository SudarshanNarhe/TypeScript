//2. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.

function combine(para1 : boolean, para2 : number):boolean|number{
        if(para1){
            return para2; // if true return number
        }
        else{
            return para1; // else return boolean value
        }
}

let pp=true;
let pp1=23;
let va=combine(pp,pp1)
console.log(va);

let pp2=false;
let pp3=23;
let va1=combine(pp2,pp3)
console.log(va1);