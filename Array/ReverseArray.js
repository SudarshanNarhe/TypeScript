// write a code to reverse an array
var arra = [1, 2, 3, 4, 5, 6];
console.log("Original : " + arra);
for (var i = 0; i < arra.length; i++) {
    for (var j = i + 1; j < arra.length; j++) {
        var temp = arra[i];
        arra[i] = arra[j];
        arra[j] = temp;
    }
}
console.log("Reverse : " + arra);
