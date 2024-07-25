function max_ele(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1]
}
const arr = [3, 5, 6, 7, 12, 15, 17, 3, 4]
console.log(max_ele(arr))