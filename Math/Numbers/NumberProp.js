
export class NumberProp
{
    constructor( propName,number)
    {
        this.propName = propName;
        this.number = number;
        this.list = [];

    }

    setList( list )
    {
        this.list = list;
    }
    

    getNth()
    {
        return this.list[this.number-1];
    }

    getIndexOfN()
    {
        
        let index = this.list.indexOf(this.number);
        return index > -1 ? index + 1 : index;
    }

    addSuffix(number) 
    {
        // Get the last two digits of the number
        let lastTwo = number % 100;
      
        // If the number is 11, 12, or 13, use "th"
        if (lastTwo >= 11 && lastTwo <= 13) {
          return `${number}th`;
        }
      
        // Get the last digit of the number
        let last = number % 10;
      
        // Use "st", "nd", "rd", or "th" based on the last digit
        switch (last) {
          case 1:
            return `${number}st`;
          case 2:
            return `${number}nd`;
          case 3:
            return `${number}rd`;
          default:
            return `${number}th`;
        }
    }

    // x is the number to be checked  s is the number of sides for the polygon
    isPolygonal(s, x) 
    {
      var n = (Math.sqrt(8 * (s - 2) * x + Math.pow(s - 4, 2)) + (s - 4)) / (2 * (s - 2));
      return Number.isInteger(n);
    }
  
    toString()
    {
        
        this.stmt = " ";
        this.n = this.getIndexOfN( this.number );
        this.nth = this.getNth( this.number );

        if( this.n  > - 1 )
            this.stmt += ` <span class="number">${this.number} </span> is the <span class="number">${this.addSuffix(this.n)}</span></th> ${this.propName} number`;
        else 
            this.stmt += ` <span class="number">${this.number } </span> is not a ${this.propName} number `;
      
        this.stmt += ` The <span class="number">${this.addSuffix(this.number)}</span> ${this.propName} is <span class="number">${this.nth}</span>`;

        return this.stmt;
    }
}