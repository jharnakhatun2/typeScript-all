
// import { studentName, studentAge} from "./student";
// import { studentName as name, studentAge as age } from "./student";
import * as student from "./student"

function displayInfo(): void{
    console.log(`${student.studentName}, ${student.studentAge}`);
}
displayInfo();