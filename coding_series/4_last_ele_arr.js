// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Method 1
function last(arr, n) {
    if (n == undefined || n == null) {
        return arr[arr.length - 1];
    } else {
        return (arr.splice(arr.length - n))
    }
}

// Method 2
function SecondLastMethod(arr, n) {
    if (n === undefined || n === null) {
        return arr[arr.length - 1];
    } else {
        let result = [];
        for (let i = Math.max(0, (arr.length) - n); i < arr.length; i++) {
            if (i < arr.length) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 4));

console.log("Output After ")
console.log(SecondLastMethod([7, 9, 0, -2]));
console.log(SecondLastMethod([7, 9, 0, -2], 3));
console.log(SecondLastMethod([7, 9, 0, -2], 6));