import { NumberProp } from "./NumberProp.js";

export class OctadecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Octadecagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ;i <= this.number; i++){
          list.push(0.5*(16*i*i - 14*i));
      }
      
      return list;
    }

}
