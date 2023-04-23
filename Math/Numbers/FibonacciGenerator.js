/*

The FibonacciGenerator class adds three new methods: isFibonacci(), getPosition(), and getFibonacciNumber(). The isFibonacci() method checks if a given number is a Fibonacci number, the getPosition() method finds the position of a given Fibonacci number in the sequence, and the getFibonacciNumber() method computes the nth Fibonacci number recursively.

In the getIndexOfN() method, we use the isFibonacci() method to check if the given number is a Fibonacci number and then use the getPosition() method to find its position in the sequence. If the number is not a Fibonacci number, we return -1.

In the getNth() method, we use the getFibonacciNumber() method to compute the nth Fibonacci number.

*/




import { NumberProp } from "./NumberProp.js";

export class FibonacciGenerator extends NumberProp {
  constructor(number) {
    super("Fibonacci", number);
  }

  isFibonacci(n) {
    const root1 = 5 * n * n + 4;
    const root2 = 5 * n * n - 4;
    return Number.isInteger(Math.sqrt(root1)) || Number.isInteger(Math.sqrt(root2));
  }

  getPosition(n) {
    let a = 0;
    let b = 1;
    let i = 1;

    while (b < n) {
      const temp = b;
      b += a;
      a = temp;
      i++;
    }

    if (b === n) {
      return i;
    } else {
      return -1;
    }
  }

 

  getFibonacciNumber(n) {

    if (n <= 1) {
      return n;
    }
    if (!this.memo) {
      this.memo = [0, 1];
    }
    if (!this.memo[n]) {
      this.memo[n] = this.getFibonacciNumber(n - 1) + this.getFibonacciNumber(n - 2);
    }
    return this.memo[n];

  }
  

  // @override the parent methods
  getIndexOfN() {
    if (this.isFibonacci(this.number)) {
      return this.getPosition(this.number);
    }
    return -1;
  }

  getNth() {
    return this.getFibonacciNumber(this.number);
  }
}
