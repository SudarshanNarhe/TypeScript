// simple array creation and declaration
var arr = [3, 4, 5, 6, 7];
console.log("Simple array : " + arr);
console.log("//////////////////////////////////////////////////");
// Generic array creation and declaration
var col;
col = ['red', 'blue', 'white', 'white'];
console.log(col);
//It gives all index
for (var index in col) {
    console.log(index);
}
console.log("//////////////////////////////////////////////////");
// It gives all elements
for (var _i = 0, col_1 = col; _i < col_1.length; _i++) {
    var ele = col_1[_i];
    console.log(ele);
}
console.log("//////////////////////////////////////////////////");
// It gives index and element 
for (var index in col) {
    console.log(index + "  " + col[index]);
}
console.log("//////////////////////////////////////////////////");
// we can use traditional for loop
for (var i = 0; i < col.length; i++) {
    console.log(i + "  " + col[i]);
}
console.log("//////////////////////////////////////////////////");
// Another with generic
var ids = [11, 22, 33, 44, 55];
console.log("Another generic array : " + ids);
