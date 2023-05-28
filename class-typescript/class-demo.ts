//class can have constructor, properties, methods
// and create object 
// class onek ta template er moto. akta class make korle ta multiple time use kora jay
//How to make Class?
// step 1 : user er vetor ki ki common property thakbe ta class er vetor make kore nite hobe;


class User{
    //property define which will be common in all user property
    userName: string;
    age : number;

    //make constructor and initialize properties
    constructor(x, y){
        this.userName = x;
        this.age = y;
    }

    //constructor er vetor property gulor j value set koreci ta dekhar jonno akti function make korte hobe
    display() : void{
        console.log(`username : ${this.userName}, age:${this.age}`);
    }
}

// class make completed. akhon oi class a use korar jonno object make korbo
//user1 - name: jharna khatun, age:25
//user2 - name: Samira Suad, age:6

let uSer1 = new User("Jharna Khatun", 25);
uSer1.display();

//====================================================================================

// 2. Class Two
class Food{
    rice: string;
    tea : number;

    constructor(ricevalue, teaValue){
        this.rice = ricevalue;
        this.tea = teaValue;
    }

    display(): void{
        console.log(`rice: ${this.rice} ml, tea : ${this.tea} cup`)
    }
}

// breakfast - rice: 250ml, tea: 1 cup
// launch -  rice : 500ml, tea: 3 cup
//dinar  - rice : 200ml, tea : 1 cup

let breakfast = new Food("250", 1);
breakfast.display();
let launch = new Food("500", 3);
launch.display();
let dinar = new Food("200", 1);
dinar.display();
