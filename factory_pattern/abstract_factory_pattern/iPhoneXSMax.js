const Phone = require('./Phone');

class iPhoneXSMax {

    // This is known as the factory pattern.
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhone Xs Max', 'A12 Bionic', '4 Gb', 77.4, 157.5, 7.9, '1242 x 2688');
    }
}

// export this class as a module.
module.exports = iPhoneXSMax;