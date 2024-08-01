// Binary Search
function binarySearch(key, arr) {
    const newArr = arr.sort((a, b) => a - b)
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (newArr[mid] === key) {
            return (`${key} is find at position ${mid}`)
        } else if (newArr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return `${key} is not found`;
}

const arr = [3, 5, 6, 8, 9, 3, 11]
console.log(binarySearch(9, arr))