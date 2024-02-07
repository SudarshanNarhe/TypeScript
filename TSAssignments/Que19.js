//Constructors:
//5. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these 
var Student = /** @class */ (function () {
    function Student(name, classname) {
        this.name = name;
        this.classname = classname;
    }
    Student.prototype.displayDetails = function () {
        console.log("Student Details:");
        console.log("  Name: ".concat(this.name));
        console.log("  Class: ".concat(this.classname));
    };
    return Student;
}());
var student1 = new Student('Amol', 'Grade 10');
var student2 = new Student('prasad', 'Grade 12');
student1.displayDetails();
student2.displayDetails();
