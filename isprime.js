// Check a number is prime or not........................

function isPrime(n) {
    if (n == 1 || n == 2) {
        return true;
    }
    else {
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
isPrime(9) ? console.log("prime") : console.log("not prime")