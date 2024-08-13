
// spread operator..................

// Usage: Used to expand an iterable (like an array) into individual elements.

// Context: Typically used in function calls, array literals, and object literals.
// Used on the right-hand side of assignment (...iterable).
// Expands iterable elements or properties into individual elements or key-value pairs.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultarr = [...array1]; // Copies elements of array1 into resultarr
const combinedArray = [...array1, ...array2];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];

console.log(newNumbers);
// ...array1.....................

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1 };

// console.log(obj2);


// rest parameter........................

// Usage: Used to represent an indefinite number of arguments as an array within function parameters.

// Context: Used only in function parameter definitions.
// Used in function parameter definitions (...name).
// Collects multiple arguments into an array.
// It gathers up the "rest" of the arguments into an array.

function sum(...arr) {
    return arr.reduce((acc, val) => acc + val)
}
console.log(sum(1, 2, 3))

// Spread: Used to unpack elements (arrays/objects) into individual elements/properties.
// Rest: Used to gather elements (function arguments) into an array.
