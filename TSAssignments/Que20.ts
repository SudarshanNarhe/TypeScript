/**6. Write a TypeScript program that creates a class called Student with properties name and roll number.
 *  Add constructor overloading to support multiple ways of initializing a Student object.
 *  Implement one constructor that takes both name and roll number as parameters and another constructor
 *  that takes only name, assuming the roll number is unknown.  
 */

class Student1 {
    public name: string;
    public rollNumber?: number;   //rollNumber is marked as optional with ? because it might not be provided in certain cases.

    constructor(name: string, rollNumber?: number) {
        this.name = name;

        // Check if rollNumber is provided, if yes, assign it; otherwise, leave it undefined.
        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        }
    }

    displayDetails(): void {
        console.log(`Student Details:`);
        console.log(`  Name: ${this.name}`);
        console.log(`  Roll Number: ${this.rollNumber !== undefined ? this.rollNumber : 'Not assigned'}`);
    }
}

 
const student11 = new Student1('Suraj', 12345);
const student22 = new Student1('Yogesh');

student11.displayDetails();
student22.displayDetails();