
// Write a JavaScript program to display the colors in the following way :

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

color.forEach((colors, index) => {
    if (index === 0) {
        console.log(`${index + 1}st choice is ${colors}`)

    } else if (index === 1) {
        console.log(`${index + 1}nd choice is ${colors}`)

    } else if (index === 2) {
        console.log(`${index + 1}rd choice is ${colors}`)

    } else {
        console.log(`${index + 1}th choice is ${colors}`)

    }
})