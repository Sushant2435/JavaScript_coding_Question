
// Using inbuilt Methods

const arr = [1, 1, 2, 3, 3, 4, 4, 6, 7, 7, 2, 9];

const uniqueElement = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))

console.log(`Unique element: ${uniqueElement}`);

const findUniqueElements = (arr) => {
    const elementCount = {};

    // Step 1: Count the occurrences of each element in the array
    for (const element of arr) {
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
    }
    // Step 2: Collect all elements that appear only once
    const uniqueElements = [];
    for (const element of arr) {
        if (elementCount[element] === 1) {
            uniqueElements.push(element);
        }
    }

    return uniqueElements;  // Return an array of all unique elements
};

const uniqueElements = findUniqueElements(arr);
console.log(`Unique elements: ${uniqueElements}`);


