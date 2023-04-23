import { NumberProp } from "./NumberProp.js";

export class RectangularGenerator extends NumberProp {
  constructor(number) {
    super("Rectangular", number);
  }

  isRectangular(n) {
    let i = 1;
    while (n > 0) {
      n -= i * (i + 1) / 2;
      i++;
    }
    return n === 0;
  }

  getPosition(n) {
    let i = 1;
    while (n > 0) {
      n -= i * (i + 1) / 2;
      i++;
    }
    if (n === 0) {
      return i - 1;
    } else {
      return -1;
    }
  }

  getRectangularNumber(n) {
    return n * (n + 1);
  }

  // @override the parent methods
  getIndexOfN() {
    if (this.isRectangular(this.number)) {
      return this.getPosition(this.number);
    }
    return -1;
  }

  getNth() {
    return this.getRectangularNumber(this.number);
  }
}
