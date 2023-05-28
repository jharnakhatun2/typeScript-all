//kmh^-1  --> ms^-1
var getMyCarSpeed = function (speed) {
    if (typeof speed === "number") {
        var convertSpeed = (speed * 1000) / 3600;
        console.log("My speed is ".concat(convertSpeed));
    }
    if (typeof speed === 'string') {
        var _a = speed.split(" "), value = _a[0], unit = _a[1]; //['10' , 'kmh^-1']
        var convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log("My speed is ".concat(convertSpeed));
    }
    else {
        console.log("There is wrong type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^=1");
