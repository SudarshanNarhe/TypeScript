// Methos of Array 

let numbers: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Original : "+numbers)
// pop()
let lastElement = numbers.pop();
console.log("After pop():", numbers, "Removed:", lastElement);

// push()
let newLength = numbers.push(8, 9);
console.log("After push():", numbers, "New Length:", newLength);

// sort()
numbers.sort();
console.log("After sort():", numbers);

// concat()
let moreNumbers = [7, 8, 9];
let combinedArray = numbers.concat(moreNumbers);
console.log("After concat():", combinedArray);

// indexOf()
let indexOfFive = numbers.indexOf(5);
console.log("Index of 5:", indexOfFive);

// shift()
let firstElement = numbers.shift();
console.log("After shift():", numbers, "Removed:", firstElement);

// splice()
let removedElements = numbers.splice(2, 3, 10, 11, 12);
console.log("After splice():", numbers, "Removed:", removedElements);

// unshift()
numbers.unshift(-1, 0, 1);
console.log("After unshift():", numbers);

// join()
let joinedString = numbers.join("-");
console.log("Joined String:", joinedString);

// lastIndexOf()
let lastIndexOfOne = numbers.lastIndexOf(1);
console.log("Last Index of 1:", lastIndexOfOne);

// slice()
let slicedArray = numbers.slice(2, 5);
console.log("Sliced Array:", slicedArray);

// toString()
let arrayString = numbers.toString();
console.log("Array as String:", arrayString);

// toLocaleString()
let localizedString = numbers.toLocaleString();
console.log("Localized String:", localizedString);



/*pop()  Removes the last element of the array and return that element
push()  Adds new elements to the array and returns the new array length
sort()  Sorts all the elements of the array
concat()  Joins two arrays and returns the combined result
indexOf()  Returns the index of the first match of a value in the array (-1 if not found)
copyWithin()  Copies a sequence of elements within the array
fill()  Fills the array with a static value from the provided start index to the end index
shift()  Removes and returns the first element of the array
splice()  Adds or removes elements from the array
unshift()  Adds one or more elements to the beginning of the array
includes()  Checks whether the array contains a certain element
join()  Joins all elements of the array into a string
lastIndexOf()  Returns the last index of an element in the array
slice()  Extracts a section of the array and returns the new array
toString()  Returns a string representation of the array
toLocaleString()  Returns a localized string representing the array*/