//object push in array object
let man :object[];
man = [];

type defaultUser = {userName: string, userId: number}; //custom type create

let property : defaultUser;
property = {userName : "Jharna", userId: 101};
man.push(property);
 

let property1 : defaultUser;
property1 = {userName : "A", userId: 101};
man.push(property1);


let property2 : defaultUser;
property2 = {userName : "B", userId: 101};
man.push(property2);



//show array object key value
for(const key in man){
    console.log(man[key]["userName"]);
}


//aro short kore detay pari
type CustomType = {userName : String, userId : number};
let men : CustomType[];
men = [];


let propertyss : CustomType;
propertyss = {userName : "Jharna", userId: 101};
men.push(propertyss);



//Another custom type create
//parameter theke only GET or POST value ashte hobe nahole error dekhabe
type RequestType = "GET" | "POST";
let getRequestType : RequestType;
getRequestType = "GET";

function getRequestHandler(requestType : RequestType){
    console.log(requestType);
}
getRequestHandler("POST");



type Family = "JHARNA" | "KHATUN" | "Web Developer";
let love : Family;
love = "KHATUN";

function life(customdataType : Family){
    console.log(customdataType);
}
life("Web Developer");