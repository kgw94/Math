import { NumberProp } from "./NumberProp.js";

export class CompositeGenerator extends NumberProp {
    constructor(number) {
        super("composite", number);
    }

    // Check if a number is composite
    isComposite() {
        if (this.number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.number); i++) {
            if (this.number % i === 0) {
                return true;
            }
        }
        return false;
    }

    // Get the nth composite number
    getCompositeNumber(n) {
        let count = 0;
        let current = 4; // Starting from 4, the first composite number
        while (count < n) {
            if (this.isCompositeHelper(current)) {
                count++;
            }
            current++;
        }
        return current - 1;
    }

    // Helper function to check if a number is composite (for internal use)
    isCompositeHelper(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return true;
            }
        }
        return false;
    }

    // Function to get the position of a composite number in the sequence of composites
    getPosition() {
        let count = 0;
        let current = 4; // Starting from 4, the first composite number
        while (current <= this.number) {
            if (this.isCompositeHelper(current)) {
                count++;
            }
            if (current === this.number) {
                return count;
            }
            current++;
        }
        return -1; // If the number is not found
    }

    // Function to return the nth composite number of this instance's number
    getNth() {
        return this.getCompositeNumber(this.number);
    }

    // Function to return the position of the instance's number in the sequence of composites
    getIndexOfN() {
        return this.getPosition();
    }
}
