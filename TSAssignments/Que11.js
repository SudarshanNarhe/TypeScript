//Advanced
//. Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'. Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
var result;
function logType(value) {
    console.log("".concat(typeof value, " ").concat(value));
}
result = "Sudarshan";
logType(result);
result = 89;
logType(result);
