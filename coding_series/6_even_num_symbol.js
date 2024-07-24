// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num) {
    const numStr = num.toString();
    let result = "";

    for (let i = 0; i < numStr.length; i++) {
        result = result + numStr[i]; // 25
        if (i < numStr.length - 1) {
            const currentDigit = +(numStr[i]); 2
            const nextDigit = +(numStr[i + 1]); 5
            if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
                result += "-";
            }
        }
    }
    return result;

}

const num = 25468;
const dashedNum = insertDashes(num);
console.log(dashedNum);  // Output: 254-6-8

