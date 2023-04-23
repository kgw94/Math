import { NumberProp } from "./NumberProp.js";

export class Icosidigonal extends NumberProp {
    constructor(number) {
        super("Icosidigonal", number);
        this.setList(this.generateList());
    }

    generateList()
    {
      let list = [];
      for( let i = 1 ; i <= this.number; i++){
          list.push( 0.5*(20*i*i - 18*i));
      }
      
      return list;
    }

}
