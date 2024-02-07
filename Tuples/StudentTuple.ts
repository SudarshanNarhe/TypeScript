//write a code to show student id using tuples and display it



type StudentTuple = [number, string, number];

function displayStudentInfo(studentTuple: StudentTuple): void {
 
  const [studentId, studentName, studentAge] = studentTuple;

  
  console.log(`Student ID: ${studentId}`);
  console.log(`Student Name: ${studentName}`);
  console.log(`Student Age: ${studentAge}`);
}



  const studentInfo: StudentTuple = [101, "John Doe", 20];

  
  displayStudentInfo(studentInfo);