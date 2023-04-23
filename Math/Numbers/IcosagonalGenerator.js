import { NumberProp } from "./NumberProp.js";

export class IcosagonalGenerator extends NumberProp {
    constructor(number) {
        super("Icosagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(18*i*i - 16*i));
      }
      
      return list;
    }

}
