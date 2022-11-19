const Phone = require('./Phone');

class iPhoneXR {

    // This is known as the factory pattern.
    constructor(serialNum) {
        return new Phone(serialNum, 'iPhone Xr', 'A12 Bionic', '3 Gb', 75.7, 150.9, 8.3, '828 x 1792');
    }
}

// export this class as a module.
module.exports = iPhoneXR;