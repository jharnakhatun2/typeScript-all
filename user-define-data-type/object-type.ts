// object type can store value as key value pair
//javascript
let userDefine = {userName : "Jharna", userId: 101};
console.log(userDefine);

//typeScript
let user2 : {userName: string, userId: number};
user2 = {userName : "Jharna", userId: 101};
console.log(user2);


//for one object
let user3 : object;
user3 = {name : "Labiba"}
console.log(user3);


// for array of object
let users : object[];
users = [{name: "A"},{name:"B"},{name:"C"}, {name:"D"}]
console.log(users);

//optional chaining object declare er khetre
let user4 : {userName: string, userId: number};
user4 = {userName : "Jharna"}; //show missing error
console.log(user4)
// but optional chain use kore problem hobe na r 
//(?:) -- meaning object id er value delayo hobe r na delay o hobe
let user5 : {userName: string, userId ?: number};
user5 = {userName : "Jharna"}; 
console.log(user5);

//object push in array object
let usersAll :object[];
usersAll = [];

let users11 : {userName: string, userId: number};
users11 = {userName : "Jharna", userId: 101};
usersAll.push(users11);
 

let user22 : {userName: string, userId: number};
user22 = {userName : "A", userId: 101};
usersAll.push(user22);


let user33 : {userName: string, userId: number};
user33 = {userName : "B", userId: 101};
usersAll.push(user33);



//show array object key value
for(const key in usersAll){
    console.log(usersAll[key]["userName"]);
}