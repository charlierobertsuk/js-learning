const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// High Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);
transformer(`JavaScript is the best!`, oneWord);

const personAlert = function (str, num) {
  console.log(`${num}. ${str}`);
};

["Charlie", "Harry", "Kyle", "Brooke", "Darren"].forEach(personAlert);
