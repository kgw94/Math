import { NumberProp } from "./NumberProp.js";

export class TridecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Tridecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(11*i*i - 9*i));
      }
      
      return list;
    }

}
