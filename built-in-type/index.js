//built in data type :   number, string , boolean, void, undefined, null
//void = akta function theke kono kisu jodi  return korte na chay she khetre data type hishabe void use kore thaki
var id; //any data type
var userId;
var userName;
var isActive;
userId = 123;
userName = "I am";
isActive = true;
console.log("User Id : ".concat(userId, ", userName : ").concat(userName, " , Activation : ").concat(isActive));
// concatination  (adding two variable)
var firstName;
var lastName;
var fullName;
firstName = "Jharna";
lastName = "Khatun";
fullName = firstName.concat(lastName);
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi I am display");
}
display();
