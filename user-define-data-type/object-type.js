// object type can store value as key value pair
//javascript
var userDefine = { userName: "Jharna", userId: 101 };
console.log(userDefine);
//typeScript
var user2;
user2 = { userName: "Jharna", userId: 101 };
console.log(user2);
//for one object
var user3;
user3 = { name: "Labiba" };
console.log(user3);
// for array of object
var users;
users = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];
console.log(users);
//optional chaining object declare er khetre
var user4;
user4 = { userName: "Jharna" }; //show missing error
console.log(user4);
// but optional chain use kore problem hobe na r 
//(?:) -- meaning object id er value delayo hobe r na delay o hobe
var user5;
user5 = { userName: "Jharna" };
console.log(user5);
//object push in array object
var usersAll;
usersAll = [];
var users11;
users11 = { userName: "Jharna", userId: 101 };
usersAll.push(users11);
var user22;
user22 = { userName: "A", userId: 101 };
usersAll.push(user22);
var user33;
user33 = { userName: "B", userId: 101 };
usersAll.push(user33);
//show array object key value
for (var key in usersAll) {
    console.log(usersAll[key]["userName"]);
}
