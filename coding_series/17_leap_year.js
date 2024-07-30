
// find leap years in given range
function leapYear(start_year, end_year) {
    for (let i = start_year; i <= end_year; i++) {
        if (i % 4 === 0 && i % 100 != 0 || i % 400 === 0) {
            console.log(`${i} is Leap Year`)
        }
    }
}

leapYear(1990, 2024)