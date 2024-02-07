//8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.
var arra = [1, 2, 3, 4, 5];
console.log("Original Array : " + arra);
//Adding element
arra.push(80);
console.log("After adding element : " + arra);
//Removing element
var element = arra.pop();
;
console.log(element);
// Iterating array
for (var _i = 0, arra_1 = arra; _i < arra_1.length; _i++) {
    var e = arra_1[_i];
    console.log(e);
}
