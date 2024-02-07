//Create Student class which contain student id , name, 3subject marks assign student value by using constructor. create a function which is calculate the percentage of given marks and create another method to display all information of student with percentage


class Student {

    id : number;
    name : String
    chem : number
    phy : number
    bio : number
    per : number

constructor(id : number,name : string,chem : number,phy : number, bio : number){
    this.id=id;
    this.name=name;
    this.chem=chem;
    this.phy=phy;
    this.bio=bio;
    this.calPercentage();
}

 calPercentage():void {
    let sum=this.bio+this.chem+this.phy
    this.per = sum/3
}

 display(): void{
    console.log("Student id : "+this.id+"\nStudent name : "+this.name+"\nPhysics Marks : "+this.phy+"\nChemistry Marks : "+this.chem+"\nBiology Marks : "+this.bio+"\nPercenatage : "+this.per+"%")
 }

}

let std1= new Student(101,"Sudarshan",98,95,92);
std1.display();
