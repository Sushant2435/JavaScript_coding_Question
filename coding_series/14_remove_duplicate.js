var myArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// using set Method ................
const uniqueArr = [...new Set(myArr)]
console.log(uniqueArr)

// using loops................

let uniqueArr1 = [];

for (let i = 0; i < arr.length; i++) {
    if (uniqueArr1.indexOf(arr[i]) === -1) {
        uniqueArr1.push(arr[i]);
    }
}

console.log(uniqueArr1);

