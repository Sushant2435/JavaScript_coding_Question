// 1. Write a JavaScript function to check whether an `input` is an array or not.
const arr = [2, 4, 5, 7]
function isArr(arr) {
    return Array.isArray(arr)
}
isArr ? console.log("yes it is an array") : console.log("it is not an array")