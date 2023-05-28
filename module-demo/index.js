"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { studentName, studentAge} from "./student";
// import { studentName as name, studentAge as age } from "./student";
var student = require("./student");
function displayInfo() {
    console.log("".concat(student.studentName, ", ").concat(student.studentAge));
}
displayInfo();
