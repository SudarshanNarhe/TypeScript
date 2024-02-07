// write a code to find out max and min from the array
var arr6 = [1, 3, 4, 5, 6, 8, 0, 9, 11, 13, 98];
var max = 0;
var min = arr6[0];
for (var _i = 0, arr6_1 = arr6; _i < arr6_1.length; _i++) {
    var ele = arr6_1[_i];
    if (ele > max) {
        max = ele;
    }
    if (ele < min) {
        min = ele;
    }
}
console.log("Maximum element from array is : " + max);
console.log("Minimum element from array is : " + min);
