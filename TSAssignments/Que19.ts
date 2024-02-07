//Constructors:
//5. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these 

class Student{
    name : string;
    classname : string

    constructor(name : string,classname : string){
        this.name=name;
        this.classname=classname;
    }
    displayDetails(): void {
        console.log(`Student Details:`);
        console.log(`  Name: ${this.name}`);
        console.log(`  Class: ${this.classname}`);
    }
}

 
const student1 = new Student('Amol', 'Grade 10');
const student2 = new Student('prasad', 'Grade 12');

student1.displayDetails();
student2.displayDetails();

