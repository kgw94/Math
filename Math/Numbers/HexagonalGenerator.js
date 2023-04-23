import { NumberProp } from "./NumberProp.js";

export class HexagonalGenerator extends NumberProp
{
    constructor(number) {
        super("Hexagonal",number);
        this.setList(this.generateList());
    }

    generateList()
    {
        let Tlist = [];

        for( let i = 1 ; i <= this.number; i++){
            let t = 2*( i * i ) - i; 
            Tlist.push(t);
        }
        
        return Tlist;
    }
}