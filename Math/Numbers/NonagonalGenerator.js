import { NumberProp } from "./NumberProp.js";

export class NonagonalGenerator extends NumberProp
{
    constructor(number) {
        super("Nonagonal",number);
        this.setList(this.generateList());
    }

    generateList()
    {
        let Tlist = [];

        for( let i = 1 ; i <= this.number; i++){
            let t = 0.5 * ( 7 * ( i * i) - (5 * i));
            Tlist.push(t);
        }

        return Tlist;
    }
}