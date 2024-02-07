//Create Student class which contain student id , name, 3subject marks assign student value by using constructor. create a function which is calculate the percentage of given marks and create another method to display all information of student with percentage
var Student = /** @class */ (function () {
    function Student(id, name, chem, phy, bio) {
        this.id = id;
        this.name = name;
        this.chem = chem;
        this.phy = phy;
        this.bio = bio;
        this.calPercentage();
    }
    Student.prototype.calPercentage = function () {
        var sum = this.bio + this.chem + this.phy;
        this.per = sum / 3;
    };
    Student.prototype.display = function () {
        console.log("Student id : " + this.id + "\nStudent name : " + this.name + "\nPhysics Marks : " + this.phy + "\nChemistry Marks : " + this.chem + "\nBiology Marks : " + this.bio + "\nPercenatage : " + this.per + " %");
    };
    return Student;
}());
var std1 = new Student(101, "Sudarshan", 98, 95, 92);
std1.display();
