var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Super class or class
//parent class
var Users = /** @class */ (function () {
    function Users(nameValue, ageValue) {
        this.name = nameValue;
        this.age = ageValue;
    }
    Users.prototype.display = function () {
        console.log("User Name: ".concat(this.name, " , User age: ").concat(this.age));
    };
    return Users;
}());
//prooperty -name: "jharna", age:25
var userOne = new Users("Jharna", 25);
userOne.display();
var userTwo = new Users("Khatun", 25);
userTwo.display();
//sub-super class
//child class
//Parent class er property gulo k child class er vetor nia ashbo
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nameValue, ageValue, idValue, locationValue) {
        var _this = _super.call(this, nameValue, ageValue) || this;
        _this.studentId = idValue;
        _this.location = locationValue;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("User Name: ".concat(this.name, " , User age: ").concat(this.age, ", Student Id: ").concat(this.studentId, ", Location: ").concat(this.location));
    };
    return Student;
}(Users));
var studentOne = new Student("Samira Suad Nabiha", 6, 101, true);
studentOne.display();
var studentTwo = new Student("Labiba Toasin Binte Nurul", 11, 102, false);
studentTwo.display();
var studentThree = new Student("Nurul Amin", 38, 103, true);
studentThree.display();
