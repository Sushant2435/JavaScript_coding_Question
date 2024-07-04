
// Write a JavaScript function to clone an array.
// using spread operator
function clone_Arr(arr) {
    return [...arr]
}
// using slice
function clone_Arr1(arr) {
    return arr.slice()
}
const arr = [2, 4, [5, 7]]
console.log(clone_Arr(arr))
console.log(clone_Arr1(arr))