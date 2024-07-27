function curriedMultiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
const result = curriedMultiply(2)(3)(4);
console.log(result)

const multiplyBy2 = curriedMultiply(2);   // Function taking b and c
const multiplyBy2And3 = multiplyBy2(3);  // Function taking c
const finalResult = multiplyBy2And3(4);

console.log(finalResult)

// const curriedMultiply = a => b => c => a * b * c;
// const result = curriedMultiply(2)(3)(4); // 24