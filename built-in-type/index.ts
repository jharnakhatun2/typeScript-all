//built in data type :   number, string , boolean, void, undefined, null
//void = akta function theke kono kisu jodi  return korte na chay she khetre data type hishabe void use kore thaki

let id; //any data type
let userId: number;
let userName : string;
let isActive : boolean;


userId = 123;
userName = "I am";
isActive = true;


console.log(`User Id : ${userId}, userName : ${userName} , Activation : ${isActive}`);

// concatination  (adding two variable)
let firstName : string;
let lastName : string;
let fullName : string;

firstName = "Jharna";
lastName = "Khatun";
fullName = firstName.concat(lastName);
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display() : void {
    console.log("Hi I am display");
}
display();


