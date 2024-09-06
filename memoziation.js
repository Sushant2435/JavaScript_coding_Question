
let sum = 0
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const memoizedCalc = (func) => {
    let cache = {};
    return function (...arg) {
        let n = arg[0];
        if (n in cache) {
            console.log("cache");
            return cache[n];
        } else {
            console.log("calculating first time");
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}
console.time();
const abcd = memoizedCalc(calc); // Calculating for the first time, should return 15
console.log(abcd(5))
console.timeEnd();

console.time();
const bcd = memoizedCalc(calc); // Calculating for the first time, should return 15
console.log(bcd(5))
console.timeEnd();