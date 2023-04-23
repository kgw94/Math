import { NumberProp } from "./NumberProp.js";

export class OctagonalGenerator extends NumberProp
{
    constructor(number) {
        super("Octagonal",number);
        this.setList(this.generateList());
    }

    generateList()
    {
        let Tlist = [];

        for( let i = 1 ; i <= this.number; i++){
            let t =  ( 3 * ( i * i ) - ( 2 * i)); 
            Tlist.push(t);
        }

        return Tlist;
    }
}