//access Modifiers -- public, private, protected, readonly
//public- j kono jayga theke babohar, access and extend and modify korte parbo
//protected - ata amra subclass a use korte parbo but subclass na thakle onno kothao theke use korte parbo na. r bahire theke ata access and modify kora jabe na
//private -  kono jaygay  bahire theke access/sub class a extend o korte parbo na. public method make kore private k access kora jay
//readonly - 
class Encapsul{
    protected encName: string; // another sub classes inherite korte parbe but bahire theke access/modification kora jabe na
    private encNames: string; // kono jayga theke access/extend korte parbo na
    public encRoll: number;
    readonly id: number;

    constructor(nameValue: string, rollValue:number, id:number){
        this.encName = nameValue;
        this.encRoll = rollValue;
        this.id = id;
    }

    display():void{
        console.log(`Encapsul Name : ${this.encName}, Encapsul Roll : ${this.encRoll}`)
    }
}



class Students extends Encapsul{
    private studentName : string;

    constructor(nameValue: string, rollValue:number, id:number, studentName : string){
        super(nameValue, rollValue, id);
        this.studentName = studentName;
    }

    display():void{
        console.log(`Encapsul Name : ${this.encName}, Encapsul Roll : ${this.encRoll}, studentName : ${this.studentName} , id: ${this.id }`)
    }

    //public method for private member access and modify
    setStudentName(studentName: string) :void{
        this.studentName = studentName;
    }

    //public method for private member access from outside
    getStudentName(): string {
        return this.studentName;
    }
}


let bypuss = new Encapsul("Samira", 1, 3);
console.log(bypuss.id);
bypuss.display();

let protectName = new Students("ABC", 2,  111,'hiell');
protectName.setStudentName("Jharna");
console.log(protectName.getStudentName());

// protectName.display();