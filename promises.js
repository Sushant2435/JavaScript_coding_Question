// 1 pending 
// 2. resolve/reject 
// 3. error state 

// these above three state are in promises in js

// ....  .. ..  . .. . .. .  .. 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let age = 21
//         if (age > 21) {
//             resolve("you are eligible");
//         } else {
//             reject("You are not eligible")
//         }
//     }, 4000)

// })

// promise.then(res => console.log(res)).catch(err => console.log(err))

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         let age = 32;
//         if (age > 30) {
//             res("you eligible")
//         } else {
//             rej("not eligible")
//         }
//     }, 2000);
// })

// console.log("before")

// promise.then(res => console.log(res)).catch(err => console.log(err))
// console.log("after")

let promise = new Promise((res, rej) => {
    setTimeout(() => {
        let age = 21;
        if (age > 30) {
            res("you eligible")
        } else {
            rej("not eligible")
        }
    }, 2000)
})
promise.then(res => console.log(res)).catch(rej => console.log(rej))