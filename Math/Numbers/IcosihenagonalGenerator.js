import { NumberProp } from "./NumberProp.js";

export class Icosihenagonal extends NumberProp {
    constructor(number) {
        super("Icosihenagonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(19*i*i - 17*i));
      }
      
      return list;
    }

}
