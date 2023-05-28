//enum - store constants; duplicate value is not allowed here
//enum 3 types -
//    1. numeric enum  :    number nea kaj korte parbo
//    2. string enum  :    string nea kaj korte parbo
//    2. Heterogeneous enum  :    string and number both mixed type nea kaj korte parbo

//numeric enum
enum RequestType {
    GetData = 1, 
    ReadData,
    SaveData,
    DeleteData,  
}
console.log(RequestType);
console.log(RequestType.ReadData);
console.log(RequestType["ReadData"]);

//string enum
enum RequestType2 {
    GetData = "get Data", 
    ReadData = "read Data",
    SaveData = "save Data",
    DeleteData = "delete data",
}
console.log(RequestType2);

//Heterogeneous enum  ()mixed with string and number)
enum RequestType3 {
    GetData = "my data",
    UserId = 120,
    readData = "Jharna Khatun",
    number = 700,
}
console.log(RequestType3);
console.log(RequestType3.UserId);
console.log(RequestType3["number"]);