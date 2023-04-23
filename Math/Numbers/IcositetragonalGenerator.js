import { NumberProp } from "./NumberProp.js";

export class IcositetragonalGenerator extends NumberProp {
    constructor(number) {
        super("Icositetragonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push(0.5*(22*i*i - 20*i));
      }
      
      return list;
    }

}
