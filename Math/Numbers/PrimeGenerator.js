import { NumberProp } from "./NumberProp.js";

export class PrimeGenerator extends NumberProp
{
    constructor(number){

        super("prime",number);
        this.limit = number;
        this.setList(this.generatePrimes());
       
    }

    generatePrimes() {
        let primes = [], isPrime = new Array(this.limit * 10).fill(true);
        for (let i = 2; i <= this.limit * 10; i++) {
          if (isPrime[i]) {
            if (primes.length === this.limit) {
              break;
            }
            primes.push(i);
            for (let j = i * i; j <= this.limit * 10; j += i) {
              isPrime[j] = false;
            }
          }
        }
        return primes;
    }
    
}

