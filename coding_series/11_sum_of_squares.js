// Write a JavaScript program to find the sum of squares of a numerical vector.
const arr = [0, 1, 2, 3, 4]

// using reduce method
const sumOfSquares = arr.reduce((acc, val) => acc + (val * val), 0)
console.log(sumOfSquares)

// using loop method

let sum = 0;
for (const num of arr) {
    let num_sqr = num * num
    sum = sum + num_sqr
}
console.log(sum)