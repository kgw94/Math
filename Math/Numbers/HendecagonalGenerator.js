import { NumberProp } from "./NumberProp.js";

export class HendecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Hendecagonal", number);
        this.setList(this.generateList());
    }
    
    generateList()
    {
        let list = [];
        for( let i = 1 ; i <= this.number; i++){
            //1/2(9n2 − 7n)
            list.push( 0.5 * ( 9 * i * i - 7 * i));
        }
        
        return list;
    }

    
}
