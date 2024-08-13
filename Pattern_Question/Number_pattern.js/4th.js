// pattern 4

//     1
//    12
//   123
//  1234

const n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';

    for (let j = 1; j <= (n - i); j++) {
        str += " ";
    }

    for (let k = 1; k <= i; k++) {
        str += k;
    }

    console.log(str);
}

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= n; i++) {
    let str = '';

    for (let j = 1; j <= (n - i); j++) {
        str += " ";
    }

    for (let k = 1; k <= i; k++) {
        str += "*";
    }

    console.log(str);
}
