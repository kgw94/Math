import { NumberProp } from "./NumberProp.js";

export class DecagonalGenerator extends NumberProp {
    constructor(number) {
        super("Deficient", number);
        this.setList(this.generateList());
    }


    properDivisors(n)
    {
        let divisors = [];

        for( let i = 1; i < n; i++){
            if( n % i == 0){
                divisors.push(i);
            }
        }

        return divisors;
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
