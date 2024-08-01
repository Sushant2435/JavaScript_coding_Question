// There are two arrays with individual values.Write a JavaScript program to compute the sum of each individual index value in the given array.

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

function computeSum(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const newArr = [];

    for (let i = 0; i < maxLength; i++) {
        const value1 = arr1[i] !== undefined ? arr1[i] : 0;
        const value2 = arr2[i] !== undefined ? arr2[i] : 0;
        newArr.push(value1 + value2);
    }

    return newArr;
}

console.log(computeSum(array1, array2));
