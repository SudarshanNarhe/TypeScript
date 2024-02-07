//5. Write a TypeScript function that accepts a parameter of type number and returns a boolean indicating whether the number is odd. Use a type guard to check and ensure the input is a valid number. 

function checkOdd(input : number):boolean{
    if(typeof input ==="number" &&input%2!=0){
        return true;
    }else {
        return false;
    }

}
let result=checkOdd(67);
console.log(result);