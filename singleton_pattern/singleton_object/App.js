import { credit, debit, total } from './CashRegister';
import { credit as _credit, total as _total } from './CashRegister';

credit(25);
credit(35);
_credit(20);
console.log(`Total amount in Till-1 : ${_total()}`);

debit(5);
console.log(`Total amount in Till : ${total()}`);