//Union data type
//===================
// ak e shathe ak er odhik ta datatype receive korte pare
// union data type er symbol ---   |

let userId : (string | number | boolean);
userId = "101";
userId = 101;
userId = true;
console.log(userId)

//function er vetor union data type er use
 function displayUserId( userId : string | number) {
    console.log(userId);
 }
 displayUserId("101");
 displayUserId(101);