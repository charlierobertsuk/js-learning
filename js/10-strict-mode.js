//use strict shows errors in the terminal that may be normaly looked over
'use strict';
let hasDriversLicense = false;
const passTest = true; 
 
if (passTest) hasDriverLicense = true; //variable is driver instead of drivers
if (hasDriversLicense) console.log('I can drive!');

// with strict mode enabled, it finds that hasDriverLicence is not defined

// without strict mode, it outputs false as hasDriversLicense has not been changed to true
// this isdue to the error that hasnt beene catched

console.log(hasDriversLicense);