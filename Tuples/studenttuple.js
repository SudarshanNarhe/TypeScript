//write a code to show student id using tuples and display it
function displayStudentInfo(studentTuple) {
    var studentId = studentTuple[0], studentName = studentTuple[1], studentAge = studentTuple[2];
    console.log("Student ID: ".concat(studentId));
    console.log("Student Name: ".concat(studentName));
    console.log("Student Age: ".concat(studentAge));
}
var studentInfo = [101, "John Doe", 20];
displayStudentInfo(studentInfo);
