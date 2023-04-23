import { NumberProp } from "./NumberProp.js";

export class PentagonalGenerator extends NumberProp
{
    constructor(number) {
        super("Pentagonal",number);
        this.setList(this.generateList());
    }

    generateList()
    {
        //
        let Tlist = [];

        for( let i = 1 ; i <= this.number; i++){
            let t = 0.5 * ( (3 * ( i * i )) - i ); 
            Tlist.push(t);
        }

        return Tlist;
    }
}