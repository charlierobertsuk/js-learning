//boolean logic
// AND, OR, NOT

const hasLicense = true;
const goodVision = true;

console.log(hasLicense && goodVision); // && is AND
console.log(hasLicense || goodVision); // || is OR
console.log(!hasLicense); // ! is NOT
console.log(!goodVision); // ! is NOT

const shouldDrive = hasLicense && goodVision;

if (shouldDrive) {
  console.log(`Can drive!`);
} else {
  console.log(`Can't drive`);
}
