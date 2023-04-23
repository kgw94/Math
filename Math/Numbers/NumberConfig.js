
import { PrimeGenerator } from "./PrimeGenerator.js";
import { SquareGenerator } from "./SquareGenerator.js";
import { TriangularGenerator } from "./TriangularGenerator.js";
import { PentagonalGenerator } from "./PentagonalGenerator.js";
import { HexagonalGenerator } from "./HexagonalGenerator.js";
import { HeptagonalGenerator } from "./HeptagonalGenerator.js";
import { OctagonalGenerator } from "./OctagonalGenerator.js";
import { NonagonalGenerator } from "./NonagonalGenerator.js";
import { DecagonalGenerator } from "./DecagonalGenerator.js";
import { HendecagonalGenerator } from "./HendecagonalGenerator.js";
import { DodecagonalGenerator } from "./DodecagonalGenerator.js";
import { TridecagonalGenerator } from "./TridecagonalGenerator.js";
import { TetradecagonalGenerator } from "./TetradecagonalGenerator.js";
import { PentadecagonalGenerator } from "./PentadecagonalGenerator.js";
import { HexadecagonalGenerator } from "./HexadecagonalGenerator.js";
import { HeptadecagonalGenerator } from "./HeptadecagonalGenerator.js";
import { OctadecagonalGenerator } from "./OctadecagonalGenerator.js";
import { EnneadecagonalGenerator } from "./Enneadecagonalgenerator.js";
import { IcosagonalGenerator } from "./IcosagonalGenerator.js";
import { Icosihenagonal } from "./IcosihenagonalGenerator.js";
import { Icosidigonal } from "./IcosidigonalGenerator.js";
import { IcositrigonalGenerator } from "./IcositrigonalGenerator.js";
import { IcositetragonalGenerator } from "./IcositetragonalGenerator.js";
import { AbundantNumber } from "./AbundantNumber.js";
import { RectangularGenerator } from "./RectangularGenerator.js";
import { FibonacciGenerator } from "./FibonacciGenerator.js";

const classMap = new Map();

classMap.set("prime", num => new PrimeGenerator(num));
classMap.set("square", num => new SquareGenerator(num));
classMap.set("rectangular", num => new RectangularGenerator(num));
classMap.set("triangular", num => new TriangularGenerator(num));
classMap.set("pentagonal", num => new PentagonalGenerator(num));
classMap.set("hexagonal", num =>  new HexagonalGenerator(num));
classMap.set("heptagonal", num => new HeptagonalGenerator(num));
classMap.set("octagonal", num => new OctagonalGenerator(num));
classMap.set("nonagonal", num => new NonagonalGenerator(num));
classMap.set("decagonal",num => new DecagonalGenerator(num));
classMap.set("hendecagonal",num => new HendecagonalGenerator(num));
classMap.set("dodecagonal" ,num => new DodecagonalGenerator(num));
classMap.set("tridecagonal", num => new TridecagonalGenerator(num));
classMap.set("tetradecagonal" ,num => new TetradecagonalGenerator(num));
classMap.set("pentadecagonal" ,num => new PentadecagonalGenerator(num));
classMap.set("hexadecagonal" , num => new HexadecagonalGenerator( num ));
classMap.set("heptadecagonal" ,num => new HeptadecagonalGenerator( num ));
classMap.set("octadecagonal" ,num => new OctadecagonalGenerator(num));
classMap.set("enneadecagonal" ,num => new EnneadecagonalGenerator(num));
classMap.set("Icosagonal", num => new IcosagonalGenerator( num ));
classMap.set("Icosihenagonal" ,num => new Icosihenagonal(num));
classMap.set("Icosidigonal" , num => new Icosidigonal(num));
classMap.set("Icositrigonal" , num => new IcositrigonalGenerator(num));
classMap.set("Icositetragonal" , num => new IcositetragonalGenerator(num));
classMap.set("Fibonacci",num => new FibonacciGenerator(num));
classMap.set("Divisors", num => new AbundantNumber(num));

const supported = [];

for( const Skey of classMap.keys()){
    supported.push(Skey);
}
const getGenerator = (type,num) => {

    const Generator = classMap.get(type);
    if (!Generator) {
        throw new Error(`Unsupported generator type: ${type}`);
    }
    return Generator(num);
};

export  { getGenerator,supported};
