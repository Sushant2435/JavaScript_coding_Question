
// pattern 3

// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j <= n; j++) {
        str += j + " ";
    }
    console.log(str.trim());
}

// .....................Star...... ... .. . . . . . . .. .

// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j <= n; j++) {
        str += "* ";
    }
    console.log(str.trim());
}
