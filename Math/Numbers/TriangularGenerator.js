import { NumberProp } from "./NumberProp.js";

export class TriangularGenerator extends NumberProp
{
    constructor(number) {
        super("Triangular",number);
    }

    
    isTriangular(n) 
    {

        let i = 1;
        while (n > 0) {
          n -= i;
          i++;
        }
        return n === 0;
    }
    

    getPosition(n) 
    {
        let i = 1;
        while (n > 0) {
          n -= i;
          i++;
        }
        if (n === 0) {
          return i - 1;
        } else {
          return -1;
        }
    }

    getTriangularNumber(n) 
    {
        return n * (n + 1) / 2;
    }
      
    
    // @override the parent methods
    getIndexOfN()
    {
       //return this.getPosition(this.number);
        if(this.isPolygonal(3,this.number))
          return this.getPosition(this.number);
        return -1;   
        
      
       /* if(this.isTriangular(this.number))
          return this.getPosition(this.number);
        return -1;   
        */

    }

    getNth()
    {
        return this.getTriangularNumber(this.number);
    }
}