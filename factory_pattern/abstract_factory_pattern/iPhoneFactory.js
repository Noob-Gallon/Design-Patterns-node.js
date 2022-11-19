const iPhoneXR = require('./iPhoneXR');
const iPhoneXS = require('./iPhoneXS');
const iPhoneXSMax = require('./iPhoneXSMax');

class iPhoneFactory {
    create(type, serialNum) {
        switch (type) {
            case 'iPhone Xr':
                return new iPhoneXR(serialNum);
            case 'iPhone Xs':
                return new iPhoneXS(serialNum);
            case 'iPhone Xs Max':
                return new iPhoneXSMax(serialNum);
            default: {
                console.log('Unknown iPhone type...');
            }
        }
    }
}

// singleton으로 factory class를 내보낸다.
// 새롭게 instance를 만들 필요가 없는 것임.
module.exports = new iPhoneFactory();