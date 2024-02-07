// count odd numbers between 11 to 20
var count = 0;
for (var i = 11; i <= 21; i++) {
    if (i % 2 != 0) {
        count++;
    }
}
console.log("Total odd numbers bet 11 to 20 are : " + count);
