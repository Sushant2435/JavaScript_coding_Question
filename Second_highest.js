function findSecondHighest(arr) {
    if (arr.length < 2) {
        return null;
    }
    arr = [...new Set(arr)];
    if (arr.length < 2) {
        return null;
    }
    arr.sort((a, b) => a - b);
    // console.log(arr)
    return arr[1];
}
const arr = [2, 11, 14, 9, 78, 7, 8]
console.log(findSecondHighest(arr));
// let n = parseInt(prompt("Enter the size of the array"));
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let element = parseInt(prompt(`Enter element ${i + 1}`));
//     arr.push(element);
// }
// const secondHighest = findSecondHighest(arr);
// document.getElementById('second_highest').innerHTML = `${secondHighest}`;