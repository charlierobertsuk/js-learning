// Name correction
const name = `cHaRliE`;
console.log(typeof name);
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(nameCorrect);

// Comparing emails
const email = `charlie@robertsclan.co.uk`;
const loginEmail = `   Charlie@RobertsClan.Co.Uk`;
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

// replacing
const priceGB = `£288,97`;
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const message = "Hello world world world";
console.log(message.replace("world", "you"));
console.log(message.replaceAll("world", "you"));

console.log(message.replace(/world/g, `you`)); // regex - g means global

//booleans
const secretCode = `A320 neo`;
console.log(secretCode.includes(`A320`)); // true
console.log(secretCode.startsWith(`A3`)); // true

if (secretCode.startsWith(`A320`) && secretCode.endsWith(`neo`)) {
  console.log(`Valid Codes`);
}

const checkBaggage = function (items) {};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snack and a gun for protection`);
