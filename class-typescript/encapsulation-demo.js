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
//access Modifiers -- public, private, protected, readonly
//public- j kono jayga theke babohar, access and extend and modify korte parbo
//protected - ata amra subclass a use korte parbo but subclass na thakle onno kothao theke use korte parbo na. r bahire theke ata access and modify kora jabe na
//private -  kono jaygay  bahire theke access/sub class a extend o korte parbo na. public method make kore private k access kora jay
//readonly - 
var Encapsul = /** @class */ (function () {
    function Encapsul(nameValue, rollValue, id) {
        this.encName = nameValue;
        this.encRoll = rollValue;
        this.id = id;
    }
    Encapsul.prototype.display = function () {
        console.log("Encapsul Name : ".concat(this.encName, ", Encapsul Roll : ").concat(this.encRoll));
    };
    return Encapsul;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(nameValue, rollValue, id, studentName) {
        var _this = _super.call(this, nameValue, rollValue, id) || this;
        _this.studentName = studentName;
        return _this;
    }
    Students.prototype.display = function () {
        console.log("Encapsul Name : ".concat(this.encName, ", Encapsul Roll : ").concat(this.encRoll, ", studentName : ").concat(this.studentName, " , id: ").concat(this.id));
    };
    //public method for private member access and modify
    Students.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    //public method for private member access from outside
    Students.prototype.getStudentName = function () {
        return this.studentName;
    };
    return Students;
}(Encapsul));
var bypuss = new Encapsul("Samira", 1, 3);
console.log(bypuss.id);
bypuss.display();
var protectName = new Students("ABC", 2, 111, 'hiell');
protectName.setStudentName("Jharna");
console.log(protectName.getStudentName());
// protectName.display();
