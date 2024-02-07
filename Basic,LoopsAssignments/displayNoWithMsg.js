// Write a code to display between 1 to 50 
// if numbers is divisible by 3 then 'Welcome'
// if number is divisible by 6 display 'Pune' 
// if number is divisible by 3 and 6 then display 'Welcome to Pune'
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 6 === 0) {
        console.log("Welcome to Pune");
    }
    else if (i % 6 === 0) {
        console.log("Pune");
    }
    else if (i % 3 === 0) {
        console.log("Welcome");
    }
    else {
        console.log(i);
    }
}
