import { NumberProp } from "./NumberProp.js";

export class HeptagonalGenerator extends NumberProp
{
    constructor(number) {
        super("Heptagonal",number);
        this.setList(this.generateList());
    }

    generateList()
    {
        let Tlist = [];

        for( let i = 1 ; i <= this.number; i++){
            let t = 0.5 * ( 5*( i * i ) - (3*i)); 
            Tlist.push(t);
        }

        return Tlist;
    }
}