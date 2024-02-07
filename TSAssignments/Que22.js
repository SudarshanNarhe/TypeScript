/**8. Write a TypeScript class called Student with properties name and age.
 * Implement a constructor that initializes these properties when a Student object is created.
 *  Additionally, add validation to ensure that the age provided is a positive number.
 * If the age is not positive, set it to a default value of 0. */
var Student2 = /** @class */ (function () {
    function Student2(name, age) {
        this.name = name;
        // Validate and set age to a default value of 0 if it's not a positive number.
        this.age = age > 0 ? age : 0;
    }
    Student2.prototype.displayDetails = function () {
        console.log("Student Details:");
        console.log("  Name: ".concat(this.name));
        console.log("  Age: ".concat(this.age));
    };
    return Student2;
}());
// Example usage:
var student111 = new Student2('Suraj', 20);
var student222 = new Student2('Amol', -5);
student111.displayDetails(); // Age is 20 (valid)
student222.displayDetails(); // Age is 0 (set to default)
