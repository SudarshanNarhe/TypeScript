
// Write a code to display number between 1 to 30 if number is divisible by 2 and 5 then stop 
// display further number

for(let i=1;i<=30;i++){

    if(i%2==0 && i%5==0){
        break
    }
    console.log(i)
}