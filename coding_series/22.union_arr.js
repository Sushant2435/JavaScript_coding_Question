// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
function unionArr(arr1, arr2) {
    let unionArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                unionArr.push(arr1[i])
            }
        }
    }
    return (unionArr)

}

const array1 = [1, 2, 3];
const array2 = [100, 2, 1, 10];
console.log(unionArr(array1, array2))