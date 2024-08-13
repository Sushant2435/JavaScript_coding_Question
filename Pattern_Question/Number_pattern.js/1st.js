// pattern 1 

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += j + " ";
    }
    console.log(str.trim())
}

// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i <= n; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += String.fromCharCode(64 + j) + " ";
    }
    console.log(str.trim())
}

// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= n; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
        str += "* ";
    }
    console.log(str.trim())
}