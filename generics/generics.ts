
// using union managing multiple data type
function printUserInfo (userId : string | number | boolean | object){
    console.log(`user id : ${userId}`)
}
printUserInfo("101");       //if user id is string
printUserInfo(101);         //if user id is number
printUserInfo(true);        //if user id is boollean
printUserInfo({id: 101});   // user id is object


//Generic in tradition function
// j kono type k easily handle korte pare generic
function printUsersInfo <X>(userId: X){
    console.log(`user id : ${userId}`)
}
printUsersInfo("101");
printUsersInfo(101);
printUsersInfo(true);
printUsersInfo({id: 101});


//multiple parameter er khetre
//amon vabe parameter baniyeci j gulo j kono data type nea kaj korte parbe 
function printStudentInfo <X,Y>(userId: X, userAge: Y){
    console.log(`UserId : ${userId}, UserAge : ${userAge}`)
}
printStudentInfo( 102, 30 );
printStudentInfo( "102", 30 );
printStudentInfo( 102, "30" );
printStudentInfo( "102", "30" );


//Generic with Arrow function
const developerInfo = <A, B>( id:A, status:B) =>{
    console.log(`Developer Id : ${id}, Developer Status : ${status}`)
}
developerInfo( "101", true );
developerInfo( 201, "Active" );
developerInfo( 301, 10 );

