// 8. Write a JavaScript program to find the most frequent item in an array.

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let frequencyMap = {};
let maxCount = 0;
let mostFrequentItem;

for (let item of arr) {
    if (frequencyMap[item]) {
        frequencyMap[item]++;
    } else {
        frequencyMap[item] = 1;
    }

    if (frequencyMap[item] > maxCount) {
        maxCount = frequencyMap[item];
        mostFrequentItem = item;
    }
}
// console.log()
console.log("The most occurred element is: " + mostFrequentItem + ":" + maxCount);
