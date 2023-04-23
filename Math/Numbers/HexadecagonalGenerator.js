import { NumberProp } from "./NumberProp.js";

export class HexadecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Hexadecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(14*i*i - 12*i));
      }
      
      return list;
    }

}
