// 22. Write a JavaScript program to compute the union of two arrays.
function union(arr1, arr2) {
    const newArr = ([...arr1, ...arr2])
    const uniqueArr = ([...new Set(newArr)])
    return (uniqueArr)
}

console.log("Union of two Array is : ", union([1, 2, 3], [100, 2, 1, 10]));

// another method

function union1(arr1, arr2) {
    const result = [];
    const map = {}
    arr1.forEach(element => {
        if (!map[element]) {
            map[element] = true;
            result.push(element);
        }
    });
    arr2.map((element) => {
        if (!map[element]) {
            map[element] = true;
            result.push(element);
        }
    })
    return result;
}

console.log("Union of two arrays is: ", union1([1, 2, 3], [100, 2, 1, 10]));