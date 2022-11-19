// const Phone = require('./Phone');

// const iPhoneXR = new Phone('IPXR-0001', 'iPhone Xr', 'A12 Bionic', '3 Gb', 75.7, 150.9, 8.3, '828 x 1792');

// iPhoneXR.displayConfig();
// iPhoneXR.dial(12345678);

// creating iphone only this way is tedious(지루한)
const iPhoneXR = require('./iPhoneXR.js');
const iPhoneXS = require('./iPhoneXS.js');
const iPhoneXSMax = require('./iPhoneXSMax.js');

const myNewiPhone = new iPhoneXR('XR-0001');
const myNewiPhoneXS = new iPhoneXS('XS-0001');
const myNewiPhoneXSMax = new iPhoneXSMax('XSMax-0001');

myNewiPhone.displayConfig();
myNewiPhone.dial(12345678);

myNewiPhoneXS.displayConfig();
myNewiPhoneXS.dial(12345678);

myNewiPhoneXSMax.displayConfig();
myNewiPhoneXSMax.dial(12345678);

