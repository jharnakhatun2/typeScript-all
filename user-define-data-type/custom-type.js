//object push in array object
var man;
man = [];
var property;
property = { userName: "Jharna", userId: 101 };
man.push(property);
var property1;
property1 = { userName: "A", userId: 101 };
man.push(property1);
var property2;
property2 = { userName: "B", userId: 101 };
man.push(property2);
//show array object key value
for (var key in man) {
    console.log(man[key]["userName"]);
}
var men;
men = [];
var propertyss;
propertyss = { userName: "Jharna", userId: 101 };
men.push(propertyss);
var getRequestType;
getRequestType = "GET";
function getRequestHandler(requestType) {
    console.log(requestType);
}
getRequestHandler("POST");
var love;
love = "KHATUN";
function life(customdataType) {
    console.log(customdataType);
}
life("Web Developer");
