import { NumberProp } from "./NumberProp.js";

export class IcositrigonalGenerator extends NumberProp {
    constructor(number) {
        super("Icositrigonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push(0.5*(21*i*i - 19*i));
      }
      
      return list;
    }

}
