
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.



// Method 1
function first(arr, n) {
    if (n == undefined || n == null) {
        return arr[0];
    } else {
        return (arr.splice(0, n))
    }
}

// Method 2
function SecondMethod(arr, n) {
    if (n === undefined || n === null) {
        return arr[0];
    } else {
        let result = [];
        for (let i = 0; i < n; i++) {
            if (i < arr.length) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

console.log("Output After ")
console.log(SecondMethod([7, 9, 0, -2]));
console.log(SecondMethod([], 3));
console.log(SecondMethod([7, 9, 0, -2], 3));
console.log(SecondMethod([7, 9, 0, -2], 6));
console.log(SecondMethod([7, 9, 0, -2], -3));