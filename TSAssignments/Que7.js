//7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.
function display(person) {
    console.log("First Name : " + person.firstName);
    console.log("Last Name : " + person.lastName);
    console.log("Age : " + person.age);
}
;
var person1 = {
    firstName: "Sudarshan",
    lastName: "Narhe",
    age: 24
};
display(person1);
var person2 = {
    firstName: "Suraj",
    lastName: "Rokade",
    age: 56
};
display(person2);
