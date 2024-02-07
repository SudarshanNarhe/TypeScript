
// write a function to perform swapping two numbers 

function swapNumbers(num1, num2){

    console.log("Original : "+num1)
    console.log("Original : "+num2)

    let temp=0;
    temp=num1;
    num1=num2;
    num2=temp;

    console.log(num1)
    console.log(num2)
}

swapNumbers(23,45)
