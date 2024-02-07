
// check the nuumber is prime number or not

function checkPrime(nuumber){
if(nuumber==0 || nuumber==1){
    console.log("Number is not a prime number")
}else{
    let count1=0;
    for(let i=2;i<=nuumber/2;i++){
        if(nuumber%i==0){
           count1++;
            break;
        }
    }
    if(count1==0){
        console.log("The number is a Prime Number")
    }else{
        console.log("The number is NOT Prime Number")
    }
}
}

checkPrime(7);
