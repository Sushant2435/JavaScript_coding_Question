// Write a JavaScript program to compute the sum and product of an array of integers.

const arr = [1, 2, 3, 4, 5, 6]

// using reduce method
const result = arr.reduce((acc, val) => {
    return {
        sum: acc.sum + val,
        prod: acc.prod * val
    };
}, { sum: 0, prod: 1 });

console.log(result);

// using loop method

let sum = 0;
let prod = 1;
for (const num of arr) {
    sum = sum + num;
    prod = prod * num;
}
console.log(`sum is ${sum} and Product is ${prod}`)