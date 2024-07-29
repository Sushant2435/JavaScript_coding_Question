// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const str = "The Quick Brown Fox";

// Method 1
let result = "";
for (const i of str) {
    if (i === i.toUpperCase()) {
        result += i.toLowerCase();
    } else {
        result += i.toUpperCase();
    }
}
console.log(result);


// Method 2

const swappedCaseStr = str.split('').map(char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
).join('');

console.log(swappedCaseStr); // Output: tHE qUICK bROWN fOX
