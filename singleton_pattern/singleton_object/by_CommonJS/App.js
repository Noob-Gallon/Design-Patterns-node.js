const cash = require('./CashRegister.js')
const cash2 = require('./CashRegister.js')

cash.PointCalc.plus(10);
cash.PointCalc.minus(5);
cash2.PointCalc.plus(15);
console.log(`total : ${cash.PointCalc.total()}`);
console.log(`total : ${cash2.PointCalc.total()}`);

console.log(`------------------------------`)

console.log(`credit : ${cash.CashRegister.credit(50)}`);
console.log(`debit : ${cash2.CashRegister.debit(30)}`);
console.log(`total-1 : ${cash.CashRegister.total()}`);
console.log(`total-2 : ${cash2.CashRegister.total()}`);
 