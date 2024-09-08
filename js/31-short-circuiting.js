`use strict`;

// || = OR
// && = AND

// use ANY data type, return ANY datatype, short circuiting
console.log(3 || `Charlie`); // Output: 3, the first truey value
console.log(`` || `Charlie`); // Output: Charlie, `` is a falsey value
console.log(true || 0); // Output: true, the first truey value
console.log(undefined || null); // Output: null, the last falsey value

console.log(`\n\nBreak\n\n`);

// && works the oppisite
console.log(3 && `Charlie`); // Output: Charlie, the last truey value
console.log(`` && `Charlie`); // Output: ``, `` is a falsey value
console.log(true && 0); // Output: 0, the first falsey value
console.log(undefined && null); // Output: undefined, the first falsey value

// nullish coalescing operator (??)
// nullish: null and undefined
// works as an OR but instead of falsey, its null and undefined (nullish)
