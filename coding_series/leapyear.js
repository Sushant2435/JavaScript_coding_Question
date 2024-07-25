function leapyear(n) {
    if (n % 4 === 0 && n % 100 !== 0 || n % 400 === 0) {
        console.log(`${n} is a leap year`)
    } else {
        console.log(`${n} is a not leap year`)
    }
}
leapyear(2024)