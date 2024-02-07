// check greatest between three numbers
var q1 = 14;
var q2 = 11;
var q3 = 90;
if (q1 > q2) {
    if (q1 > q3) {
        console.log(q1);
    }
    else {
        console.log(q3);
    }
}
else if (q2 > q3) {
    console.log(q2);
}
else
    console.log(q3);
