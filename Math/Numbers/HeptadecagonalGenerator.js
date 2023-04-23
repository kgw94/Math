import { NumberProp } from "./NumberProp.js";

export class HeptadecagonalGenerator extends NumberProp {
    constructor(number) {
        super("heptadecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ;i <= this.number; i++){
          list.push(0.5*(15*i*i - 13*i));
      }
      
      return list;
    }

}
