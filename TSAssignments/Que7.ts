//7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.

type Person={
    firstName: string;
    lastName: string;
    age: number;
};

function display(p : Person): void{
    console.log("First Name : "+p.firstName)
    console.log("Last Name : "+p.lastName)
    console.log("Age : "+p.age);
};

const person1:Person={
    firstName: "Sudarshan",
    lastName: "Narhe",
    age: 24
};
display(person1);

const person2:Person={
    firstName: "Suraj",
    lastName: "Rokade",
    age: 56
};
display(person2);