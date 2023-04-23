import { NumberProp } from "./NumberProp.js";

export class TetradecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Tetradecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(12*i*i - 10*i));
      }
      
      return list;
    }

}
