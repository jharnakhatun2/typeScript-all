//kmh^-1  --> ms^-1
const getMyCarSpeed = (speed : unknown) =>{
    if( typeof speed === "number"){
        const convertSpeed = (speed *1000)/3600;
        console.log(`My speed is ${convertSpeed}`);
    }
    if(typeof speed === 'string'){
        const [value, unit] = speed.split( " " ); //['10' , 'kmh^-1']
        const convertSpeed = (parseFloat(value) *1000)/3600;
        console.log(`My speed is ${convertSpeed}`)
    }
    else{
        console.log(`There is wrong type`)
    }
}
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^=1");