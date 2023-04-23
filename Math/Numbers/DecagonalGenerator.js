import { NumberProp } from "./NumberProp.js";

export class DecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Decagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          // 4n2 - 3n
          list.push( 4*i*i - 3 * i);
      }
      
      return list;
    }

}
