// Suppose you want some operation do when all parameter availble , when you not pass any one parameter during invoke then it will return a function

// Practical example - Sent automatic email

function sendEmail(to) {
    return function (subject) {
        return function (body) {
            console.log(`Sending Email to ${to} with subject ${subject}\nand information is: ${body}`)
        }
    }
}

let step1 = sendEmail('abcd@gmail.com');
let step2 = step1('New order confirmation');
step2("this is about body data");


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