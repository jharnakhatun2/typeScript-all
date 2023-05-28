//class can have constructor, properties, methods
// and create object 
// class onek ta template er moto. akta class make korle ta multiple time use kora jay
//How to make Class?
// step 1 : user er vetor ki ki common property thakbe ta class er vetor make kore nite hobe;
var User = /** @class */ (function () {
    //make constructor and initialize properties
    function User(x, y) {
        this.userName = x;
        this.age = y;
    }
    //constructor er vetor property gulor j value set koreci ta dekhar jonno akti function make korte hobe
    User.prototype.display = function () {
        console.log("username : ".concat(this.userName, ", age:").concat(this.age));
    };
    return User;
}());
// class make completed. akhon oi class a use korar jonno object make korbo
//user1 - name: jharna khatun, age:25
//user2 - name: Samira Suad, age:6
var uSer1 = new User("Jharna Khatun", 25);
uSer1.display();
//====================================================================================
// 2. Class Two
var Food = /** @class */ (function () {
    function Food(ricevalue, teaValue) {
        this.rice = ricevalue;
        this.tea = teaValue;
    }
    Food.prototype.display = function () {
        console.log("rice: ".concat(this.rice, " ml, tea : ").concat(this.tea, " cup"));
    };
    return Food;
}());
// breakfast - rice: 250ml, tea: 1 cup
// launch -  rice : 500ml, tea: 3 cup
//dinar  - rice : 200ml, tea : 1 cup
var breakfast = new Food("250", 1);
breakfast.display();
var launch = new Food("500", 3);
launch.display();
var dinar = new Food("200", 1);
dinar.display();
