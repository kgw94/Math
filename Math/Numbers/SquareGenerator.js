import { NumberProp } from "./NumberProp.js";

export class SquareGenerator extends NumberProp {
    constructor(number) {
      super("square",number);
     
    }

    // Using the Babylonian method:
    isSquare(n) 
    {
      let x = n;
      let y = 1;
      let e = 0.000001; 
      while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
      }
      return x === y;

    }

// Function to get the position of n in a list of square numbers <= n
   getPosition(n) {
      let i = 1;
      while (i * i <= n) {
        if (i * i === n) {
          return i;
        }
        i++;
      }
      return -1;
    }

// Function to get the nth square number
    getSquareNumber(n) {
        return n * n;
    }

    getNth()
    {
      return this.getSquareNumber(this.number);
    }

    getIndexOfN()
    {
        return this.getPosition(this.number);
    }
}

  