
//All methods of String 

let str: string = "Hello World";
console.log("String : "+str)

// Accessing Characters
let charAtResult = str.charAt(1); // 'e'
console.log("Char at result : "+charAtResult)

// Concatenation
let concatResult = str.concat(" ", "from TypeScript"); // "Hello World from TypeScript"
console.log("Concat result : "+concatResult)

// Finding Substrings
let indexOfResult = str.indexOf("o"); // 4
console.log("indexOfResult : "+indexOfResult)

let lastIndexOfResult = str.lastIndexOf("o"); // 7
console.log("lastIndexOfResult : "+lastIndexOfResult)

// let startsWithResult = str.startsWith("Hello"); // true
// let endsWithResult = str.endsWith("World"); // true
// let includesResult = str.includes("lo"); // true

// Extracting Substrings
let substringResult = str.substring(0, 5); // "Hello"
console.log("SubString result : "+substringResult)

let sliceResult = str.slice(0, 5); // "Hello"
console.log("Slice result : "+sliceResult);

let substrResult = str.substr(0, 5); // "Hello"
console.log("SubstrResult : "+substrResult)

// Removing Whitespace
let trimResult = "   Hello   ".trim(); // "Hello"
console.log("Trim : "+trimResult)

// Replacing
let replaceResult = str.replace("World", "Universe"); // "Hello Universe"
console.log("Replacing a result : "+replaceResult)

// Case Transformation
let toUpperCaseResult = str.toUpperCase(); // "HELLO"
console.log("To upper case : "+toUpperCaseResult);

let toLowerCaseResult = str.toLowerCase(); // "hello"
console.log("To lower case : "+toLowerCaseResult)

// Splitting and Joining
let splitResult = str.split(" "); // ["Hello", "World"]
console.log("Split Result : "+splitResult)

let joinResult = ["Hello", "TypeScript"].join(" "); // "Hello TypeScript"
console.log("Join result : "+joinResult)

// Padding
// let padStartResult = str.padStart(15, "*"); // "****Hello World"
// let padEndResult = str.padEnd(15, "*"); // "Hello World****"

// Repeat
// let repeatResult = "abc".repeat(3); // "abcabcabc"

// Template Literals
let templateLiteral = `${str} from TypeScript`; // "Hello World from TypeScript"
console.log("templateLiteral : "+templateLiteral)


/**
charAt()       Returns the character at the given index
concat()      Returns a combination of the two or more specified strings
indexOf()      Returns an index of first occurrence of the specified substring from a string (-1 if not found)
replace()      Replaces the matched substring with a new substring
split()          Splits the string into substrings and returns an array
toUpperCase()  Converts all the characters of the string into upper case
toLowerCase()  Converts all the characters of the string into lower case
charCodeAt()  Returns a number that is the UTF-16 code unit value at the given index
codePointAt()  Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified index
includes()      Checks whether a string includes another string
endsWith()      Checks whether a string ends with another string
LastIndexOf()  Returns the index of last occurrence of value in the string
localeCompare()  Checks whether a string comes before, after or is the same as the given string
match()          Matches a regular expression against the given string
normalize()      Returns the Unicode Normalization Form of the given string.
padEnd()      Pads the end of the current string with the given string
padStart()      Pads the beginning of the current string with given string
repeat()      Returns a string consisting of the elements of the object repeated in the given times.
search()      Searches for a match between a regular expression and a string
slice()          Returns a section of a string
startsWith()  Checks whether a string starts with another string
substr()      Returns a string beginning at the specified location and of the given characters
substring()      Returns a string between the two given indexes
toLocaleLowerCase()  Returns a lower case string while respecting current locale
toLocaleUpperCase()  Returns an upper case string while respecting current locale
trim()          Trims the white space from beginning and end of string
trimLeft()      Trims the white space from left side of the string
trimRight()      Trims the white space from right side of the string */