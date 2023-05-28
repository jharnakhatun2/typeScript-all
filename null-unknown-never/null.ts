//function create for  search name
const nameSearch = (value:string | null) =>{
    if( value === null ){
        console.log("There is nothing to search");
    }
    else{
        console.log("searching ...")
    }
}
nameSearch( null );