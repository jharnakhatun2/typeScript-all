//Array data type declare
let name1 : string[];
let name2 : number[];
let name3 : boolean[];

//Array similar type
let userName1 : string[];
userName1 = ['anis','jharna','pinki'];
console.log(userName1[1]);

//Array of string (type declare)
let userName : Array<string>;  
userName = ['anis','jharna','pinki'];
console.log(userName[1]);

// Array similar type niye kaj kore but jokhon multiple type nea kaj kore tokhon union type use korte hoy
let userNameId : (string | number)[];
userNameId=['jharna','12',321];
console.log(userNameId);

//Array sorting
userName.sort();
console.log(userName);