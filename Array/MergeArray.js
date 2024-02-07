// Merge array into third array 
var ara = [1, 2, 3, 4, 5];
var aba = [6, 7, 8, 9, 0];
var newarray = [];
for (var _i = 0, ara_1 = ara; _i < ara_1.length; _i++) {
    var ele = ara_1[_i];
    newarray.push(ele);
}
for (var _a = 0, aba_1 = aba; _a < aba_1.length; _a++) {
    var ele = aba_1[_a];
    newarray.push(ele);
}
console.log(newarray);
