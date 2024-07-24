const mergeArray = (arr1, arr2) => [...new Set([...arr1, ...arr2])]


console.log(mergeArray([1, 2, 3], [3, 4, 5]));

const uniqueArray = (arr) => [...new Set(arr)]

console.log(uniqueArray([2, 3, 6, 3, 4, 3, 2]))