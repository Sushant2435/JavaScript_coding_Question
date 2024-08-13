// pattern 2
// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = " "
    for (let j = n; j >= i; j--) {
        str = str + j + " "
    }
    console.log(str.trim())
}
// .....................Star...... ... .. . . . . . . .. .

// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i <= n; i++) {
    let str = " "
    for (let j = n; j >= i; j--) {
        str += "* "
    }
    console.log(str.trim())
}