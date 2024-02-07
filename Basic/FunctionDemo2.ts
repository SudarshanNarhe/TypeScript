
// To remove the error for same name function

function display(a:string,b:string):string

function display(a:number,b:string):string

function display(a:string,b:number):number

function display(a:number,b:number):number

function display(a:any,b:any):any{
    return a+b;
}

console.log(display('Yash',"Gupta"))
console.log(display(2,3))
console.log(display(2,"Gupta"))
console.log(display('Yash',2))

/* Flow of execution is 
    it will check the execution first then the same parameter and signature is present 
    it will go in implementation and return the value
    otherwise it will give an error */ 