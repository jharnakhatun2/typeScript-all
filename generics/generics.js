// using union managing multiple data type
function printUserInfo(userId) {
    console.log("user id : ".concat(userId));
}
printUserInfo("101"); //if user id is string
printUserInfo(101); //if user id is number
printUserInfo(true); //if user id is boollean
printUserInfo({ id: 101 }); // user id is object
//Generic in tradition function
// j kono type k easily handle korte pare generic
function printUsersInfo(userId) {
    console.log("user id : ".concat(userId));
}
printUsersInfo("101");
printUsersInfo(101);
printUsersInfo(true);
printUsersInfo({ id: 101 });
//multiple parameter er khetre
//amon vabe parameter baniyeci j gulo j kono data type nea kaj korte parbe 
function printStudentInfo(userId, userAge) {
    console.log("UserId : ".concat(userId, ", UserAge : ").concat(userAge));
}
printStudentInfo(102, 30);
printStudentInfo("102", 30);
printStudentInfo(102, "30");
printStudentInfo("102", "30");
//Generic with Arrow function
var developerInfo = function (id, status) {
    console.log("Developer Id : ".concat(id, ", Developer Status : ").concat(status));
};
developerInfo("101", true);
developerInfo(201, "Active");
developerInfo(301, 10);
