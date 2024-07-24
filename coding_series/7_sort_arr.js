// Write a JavaScript program to sort the items of an array.
var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Method 1
const sortArr = arr.sort((a, b) => a - b)
console.log(sortArr)

// Method2

function BubbleSort(arr) {
    let n = arr.length;
    var temp;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)

}

BubbleSort(arr);