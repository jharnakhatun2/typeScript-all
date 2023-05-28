//enum - store constants; duplicate value is not allowed here
//enum 3 types -
//    1. numeric enum  :    number nea kaj korte parbo
//    2. string enum  :    string nea kaj korte parbo
//    2. Heterogeneous enum  :    string and number both mixed type nea kaj korte parbo
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GetData"] = 1] = "GetData";
    RequestType[RequestType["ReadData"] = 2] = "ReadData";
    RequestType[RequestType["SaveData"] = 3] = "SaveData";
    RequestType[RequestType["DeleteData"] = 4] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.ReadData);
console.log(RequestType["ReadData"]);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["GetData"] = "get Data";
    RequestType2["ReadData"] = "read Data";
    RequestType2["SaveData"] = "save Data";
    RequestType2["DeleteData"] = "delete data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
//Heterogeneous enum  ()mixed with string and number)
var RequestType3;
(function (RequestType3) {
    RequestType3["GetData"] = "my data";
    RequestType3[RequestType3["UserId"] = 120] = "UserId";
    RequestType3["readData"] = "Jharna Khatun";
    RequestType3[RequestType3["number"] = 700] = "number";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.UserId);
console.log(RequestType3["number"]);
