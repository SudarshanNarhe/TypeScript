//Type Guards:
//4. Write a TypeScript function that takes an argument of type string | number. Inside the function, use a type guard to check whether the argument is a string or a number. Then, log the appropriate message accordingly. 
function logTypeMessage(input) {
    if (typeof input === 'string') {
        console.log("The input is a string: ".concat(input));
    }
    else if (typeof input === 'number') {
        console.log("The input is a number: ".concat(input));
    }
    else {
        console.log("The input is neither a string nor a number: ".concat(input));
    }
}
logTypeMessage("Hello");
logTypeMessage(42);
//logTypeMessage(true);    
/**In this example, the logTypeMessage function takes an argument of type string | number.
 *  Inside the function, the typeof operator is used as a type guard to check whether the input
 *  is a string or a number.
 *  Depending on the type of the input, the function logs the appropriate message. */ 
