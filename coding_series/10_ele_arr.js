// Write a JavaScript program that prints the elements of the following array.
const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//using nested loop

for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`)
    for (let j = 0; j < arr[i].length; j++) {
        console.log(`${arr[i][j]}`)
    }
}

// using for each method

arr.forEach((row, i) => {
    console.log(`row ${i}`);
    row.forEach(value => {
        console.log(value);
    });
});