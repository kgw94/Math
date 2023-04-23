import { NumberProp } from "./NumberProp.js";

export class AbundantNumber  extends NumberProp {
    constructor(number) {
        super("Divisors", number);
        this.setList(this.generateList());
    }

    getDivisors(n) 
    {
        let divisors = [1];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (i !== n/i) {
                    divisors.push(n/i);
                }
            }
        }

        divisors.push(n);
        return divisors;
    }
    
    generateList()
    {
        return this.getDivisors( this.number );
    }

    // Javascript program for an Optimized
    // solution to check Abundant Number
 
    // Function to calculate
    // sum of divisors

    getSum(n)
    {
            let sum = 0;
        
            // Note that this loop runs
            // till square root of n
            for (let i = 1; i <= Math.sqrt(n); i++)
            {
                if (n % i == 0)
                {
                    // If divisors are equal,take
                    // only one of them
                    if (n / i == i)
                        sum = sum + i;
        
                    // Otherwise take both
                    else
                    {
                        sum = sum + i;
                        sum = sum + (n / i);
                    }
                }
            }
        
            // calculate sum of all
            // proper divisors only
            sum = sum - n;
            return sum;
    }

    checkAbundant(n)
    {
        // Return true if sum of
        // divisors is greater than n.
        return ( this.getSum(n) > n);
    }
    
    /*
    This function uses a while loop to iterate through all integers starting from 1, and for each number i, it calls the function getDivisors that returns an array of all the divisors of i.
    Then, it uses the reduce method to get the sum of the divisors and checks if it's greater than i, if it is, it increments the count. When the count reaches n, it returns the current number i as the nth abundant number.

     Please note that, to use this function you should have already implemented the function getDivisors that returns an array of all the divisors of a number.
    */

    getNthAbundantNumber(n) {
        let nums = [];
        let i = 0;
        do
        {
            if( this.checkAbundant(i))
                nums.push(i);
            i++;

        }while( nums.length < n );
        
        return nums[n-1];
    }
    
    toString()
    {
        let stmt = '';
        let sum =  this.list.reduce((acc, val) => acc + val, 0);
        let properDivisors = this.list.filter((num) => num != this.number );
        let sumProperDivisors = properDivisors.reduce((acc,val) => acc + val ,0);

        let nth = this.getNthAbundantNumber( this.number );

        stmt += `</p> sum of divisors of ${this.number} is &nbsp;: ${this.list.join('+')} = ${sum} </p>`;
        stmt += `<p> sum of proper divisors of ${this.number } is &nbsp; :${properDivisors.join('+')} = ${sumProperDivisors} </p>`;
        stmt += `
        <p> 
        ${ sumProperDivisors > this.number ? `${this.number} is an abundant number`:`${this.number} is a deficient number `}
        </p>`;
        
        stmt += ` The ${ this.addSuffix( this.number) } abundant number is: ${ nth }</p>`;

        stmt += `<p> ${ this.number === sumProperDivisors ? `${this.number} is a perfect number `:`${this.number} is not a perfect number`} </p>`;
        return stmt;
    }

}
