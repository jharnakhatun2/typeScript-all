export class Ducks{
    egg : string;
    number : number;

    constructor(eggValue: string, duckNumber: number){
        this.egg = eggValue;
        this.number = duckNumber;
    }

    displayDuckData() : void{
        console.log(`${this.egg}, ${this.number}`);
    }
}


