//8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.

let arra=[1,2,3,4,5];

console.log("Original Array : "+arra)

//Adding element
arra.push(80);
console.log("After adding element : "+arra)

//Removing element
let element=arra.pop();;
console.log(element)

// Iterating array

for(let e of arra){
    console.log(e)
}


