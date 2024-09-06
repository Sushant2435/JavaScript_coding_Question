// pattern with star
//     *
//    ***
//   *****
//  *******
// *********

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n + 4; j++) {
        if (j >= (6 - i) && j <= (4 + i)) {
            str += "*";
        } else {
            str += " ";
        }
    }
    console.log(str);
}

// pattern with number 

//     1
//    123
//   12345
//  1234567
// 123456789

for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n + 4; j++) {
        if (j >= (6 - i) && j <= (4 + i)) {
            str += (j - (n - i));
        } else {
            str += " ";
        }
    }
    console.log(str);
}

