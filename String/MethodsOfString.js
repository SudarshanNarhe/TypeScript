//All methods of String 
var str = "Hello World";
console.log("String : " + str);
// Accessing Characters
var charAtResult = str.charAt(1); // 'e'
console.log("Char at result : " + charAtResult);
// Concatenation
var concatResult = str.concat(" ", "from TypeScript"); // "Hello World from TypeScript"
console.log("Concat result : " + concatResult);
// Finding Substrings
var indexOfResult = str.indexOf("o"); // 4
console.log("indexOfResult : " + indexOfResult);
var lastIndexOfResult = str.lastIndexOf("o"); // 7
console.log("lastIndexOfResult : " + lastIndexOfResult);
// let startsWithResult = str.startsWith("Hello"); // true
// let endsWithResult = str.endsWith("World"); // true
// let includesResult = str.includes("lo"); // true
// Extracting Substrings
var substringResult = str.substring(0, 5); // "Hello"
console.log("SubString result : " + substringResult);
var sliceResult = str.slice(0, 5); // "Hello"
console.log("Slice result : " + sliceResult);
var substrResult = str.substr(0, 5); // "Hello"
console.log("SubstrResult : " + substrResult);
// Removing Whitespace
var trimResult = "   Hello   ".trim(); // "Hello"
console.log("Trim : " + trimResult);
// Replacing
var replaceResult = str.replace("World", "Universe"); // "Hello Universe"
console.log("Replacing a result : " + replaceResult);
// Case Transformation
var toUpperCaseResult = str.toUpperCase(); // "HELLO"
console.log("To upper case : " + toUpperCaseResult);
var toLowerCaseResult = str.toLowerCase(); // "hello"
console.log("To lower case : " + toLowerCaseResult);
// Splitting and Joining
var splitResult = str.split(" "); // ["Hello", "World"]
console.log("Split Result : " + splitResult);
var joinResult = ["Hello", "TypeScript"].join(" "); // "Hello TypeScript"
console.log("Join result : " + joinResult);
// Padding
// let padStartResult = str.padStart(15, "*"); // "****Hello World"
// let padEndResult = str.padEnd(15, "*"); // "Hello World****"
// Repeat
// let repeatResult = "abc".repeat(3); // "abcabcabc"
// Template Literals
var templateLiteral = "".concat(str, " from TypeScript"); // "Hello World from TypeScript"
console.log("templateLiteral : " + templateLiteral);
