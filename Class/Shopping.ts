/** Create a shopping class which has a pid, pname, quantity, and price per item. Initialize all the values , then calculate the bill.
 * If the quantity is less than zero or zero , then show error msg. Otherwise calculate the bill. 
 * If the bill calculation is done then display all the shopping details including the total bill.
 */

class Shopping{
    id : number
    pname : String
    quantity : number
    price : number
    totalBill : number

    constructor(id : number, pname : String, quantity : number, price : number){
        this.id=id;
        this.pname=pname;
        this.quantity=quantity;
        this.price=price
        this.calculateBill();
    }

    calculateBill():void{

        if(this.quantity>0){
            this.totalBill=this.quantity*this.price
            this.display();
        }
        else{
            console.log("Quantity is less than Zero or Zero")
        }
    }

    display(): void{
        console.log("Product Id : "+this.id+"\nProduct Name : "+this.pname+"\nQauntity : "+this.quantity+"\nPrice : "+this.price+"\nTotal Bill : "+this.totalBill)
    }

}

let prd= new Shopping(11,"Mobile",10,45000);



