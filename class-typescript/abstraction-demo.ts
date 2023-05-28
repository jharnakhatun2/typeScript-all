// abstract class
abstract class Human{
    body:string;
    work: number;

    constructor(body:string, work:number){
        this.body = body;
        this.work = work;
    }

    //Abstract method
    abstract display():void;
}

class Environment extends Human{

    livingArea: string;

    constructor(body:string, work:number, livingArea: string){
        super(body, work);
        this.livingArea = livingArea;
    }

    display(): void {
        console.log(`Human's full ${this.body} involve to make ${this.work} super fresh ${this.livingArea} living area`)
    }

}

let thesis = new Environment("brain", 7, "Southern East");
thesis.display();