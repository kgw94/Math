import { NumberProp } from "./NumberProp.js";

export class PentadecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Pentadecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(13*i*i - 11*i));
      }
      
      return list;
    }

}
