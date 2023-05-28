// Super class or class
//parent class
class Users{
    name:string;
    age:number;

    constructor(nameValue: string, ageValue:number){
        this.name = nameValue;
        this.age = ageValue;
    }

    display():void{
        console.log(`User Name: ${this.name} , User age: ${this.age}`)
    }
}

//prooperty -name: "jharna", age:25
let userOne = new Users("Jharna", 25);
userOne.display();
let userTwo = new Users("Khatun", 25);
userTwo.display();


//sub-super class
//child class
//Parent class er property gulo k child class er vetor nia ashbo
class Student extends Users{
    studentId : number;
    location : boolean;

    constructor(nameValue:string, ageValue:number, idValue:number, locationValue:boolean){
        super(nameValue, ageValue);
        this.studentId = idValue;
        this.location = locationValue;
    }

    display():void{
        console.log(`User Name: ${this.name} , User age: ${this.age}, Student Id: ${this.studentId}, Location: ${this.location}`)
    }
}

let studentOne = new Student("Samira Suad Nabiha", 6, 101, true);
studentOne.display();
let studentTwo = new Student("Labiba Toasin Binte Nurul",11, 102, false);
studentTwo.display();
let studentThree = new Student("Nurul Amin",38, 103, true);
studentThree.display();