import { NumberProp } from "./NumberProp.js";

export class DodecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Dodecagonal", number);
        this.setList(this.generateList());
    }
    
    generateList()
    {
        let list = [];
        for( let i = 1 ; i <= this.number; i++){
            // 1/2 (10n2 − 8n)
            list.push( 0.5*(10*i*i - 8*i));
        }
        
        return list;
    }

    
}
