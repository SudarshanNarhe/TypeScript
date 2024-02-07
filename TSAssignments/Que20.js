/**6. Write a TypeScript program that creates a class called Student with properties name and roll number.
 *  Add constructor overloading to support multiple ways of initializing a Student object.
 *  Implement one constructor that takes both name and roll number as parameters and another constructor
 *  that takes only name, assuming the roll number is unknown.
 */
var Student1 = /** @class */ (function () {
    function Student1(name, rollNumber) {
        this.name = name;
        // Check if rollNumber is provided, if yes, assign it; otherwise, leave it undefined.
        if (rollNumber !== undefined) {
            this.rollNumber = rollNumber;
        }
    }
    Student1.prototype.displayDetails = function () {
        console.log("Student Details:");
        console.log("  Name: ".concat(this.name));
        console.log("  Roll Number: ".concat(this.rollNumber !== undefined ? this.rollNumber : 'Not assigned'));
    };
    return Student1;
}());
var student11 = new Student1('Suraj', 12345);
var student22 = new Student1('Yogesh');
student11.displayDetails();
student22.displayDetails();
