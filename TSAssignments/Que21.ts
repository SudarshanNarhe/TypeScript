/**7. Write a TypeScript class called Shape with properties like color.
 *  Implement a constructor that initializes the color property when a Shape object is created. 
 * Then, create a derived class Circle that extends Shape. Implement a constructor for the Circle class 
 * that takes color and radius as parameters and initializes them along with the color property 
 * of the base class.  
 */

class Shape1 {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }
}

class Circle1 extends Shape1 {
    public radius: number;

    constructor(color: string, radius: number) {
        super(color);    
        this.radius = radius;
    }

    displayDetails(): void {
        console.log(`Circle Details:`);
        console.log(`  Color: ${this.color}`);
        console.log(`  Radius: ${this.radius}`);
    }
}


const redCircle1 = new Circle1('Red', 5);

redCircle1.displayDetails();