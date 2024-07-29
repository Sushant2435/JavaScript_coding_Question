

// console.log("Hello")
// setTimeout((a, b) => {
//     console.log("hello")
// }, 2000)
// console.log("hii")



// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Hello")
//     }, 2000)
// }
// console.log("Starting console")

// fetchData((data) => {
//     console.log(data)
// })
// console.log("Other data")


// Async and Await

let promise = new Promise((res, rej) => {
    console.log("Before")
    setTimeout(() => {
        let age = 32;
        if (age > 30) {
            res("you eligible");
        } else {
            rej("not eligible");
        }
    }, 2000);
    console.log("after")

});

async function getEligibility() {
    try {
        const result = await promise;
        console.log(result);
    } catch (err) {
        console.log(err)
    }
} 1
getEligibility();