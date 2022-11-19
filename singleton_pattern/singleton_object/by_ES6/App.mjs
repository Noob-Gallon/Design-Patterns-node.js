import { CashRegister as moduleA, PointCalc as modulePointA } from './CashRegister.mjs';
import { CashRegister as moduleB, PointCalc as modulePointB } from './CashRegister.mjs';

moduleA.credit(25);
moduleA.credit(35);
moduleB.credit(20);
console.log(`Total amount in moduleB : ${moduleB.total()}`)

moduleB.debit(5);
console.log(`Total amount in moduleA : ${moduleA.total()}`)

console.log(`------------------------------`)

modulePointA.plus(10);
modulePointB.plus(10);
console.log(`Current Point in modulePointB : ${modulePointB.total()}`)

modulePointA.minus(5);
console.log(`Current Point in modulePointB : ${modulePointA.total()}`);