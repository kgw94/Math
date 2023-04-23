import { NumberProp } from "./NumberProp.js";

export class EnneadecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Enneadecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(17*i*i - 15*i));
      }
      
      return list;
    }

}
