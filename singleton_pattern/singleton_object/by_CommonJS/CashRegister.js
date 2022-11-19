let cash = 0; // This is a private variable
let point = 0;

const CashRegister = {

    // credit function allows to add funds.
    credit(amount) {
        cash = cash + amount;
        return cash;
    },

    // debit function allows us to take funds away.
    debit(amount) {
        if (amount <= cash) {
            cash = cash - amount;
            return true;
        } else {
            return false;
        }
    },

    // total function tells us how much cash we have.
    total() {
        return cash;
    }
}

const PointCalc = {
    plus(_p) {
        point += _p;
    },
    minus(_p) {
        if (_p > point) {
            return;
        }

        point -= _p;
    },
    total() {
        return point;
    }
}
// commonJS -> ES module로 변환 가능.
// these 3 methods are public because we are using 
// module.exports to export them out as an interface.
// so, variable 'cash' is private.
// we can only using the variable cash using the given interface functions.

exports.CashRegister = CashRegister;
exports.PointCalc = PointCalc;