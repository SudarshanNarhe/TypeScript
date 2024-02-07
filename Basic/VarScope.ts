

// Var variable scope

var no1=89;

function showData1(){
    var no2=78;
    if(no1>no2){

        var no3=23;
        console.log(no1+"  "+no2)
    }
    console.log(no1)
  // console.log(no3)  // it will show no3 outside the if block also
}
showData1()

 // console.log(m)  // it will show undefined but not the error
var m=100;

// Multiple varibles with same names is allowed 
var r=20;
var R=30;
var r=23;
var R=89;
console.log(r)
console.log(R)

