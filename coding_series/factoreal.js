
// normal technique

function fact(num) {
    if (num == 0 && num == 1) {
        return 1;
    } else {
        let f = 1;
        for (let i = num; i > 1; i--) {
            f = f * i;
        }
        return f;

    }

}
console.log(fact(5))

// recursion way

function fact1(num) {
    if (num == 0 && num == 1) {
        return 1;
    } else {
        return num * fact(num - 1)
    }
}
console.log(fact1(5))