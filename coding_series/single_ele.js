
// Using inbuilt Methods

const arr = [1, 1, 2, 3, 3, 4, 4, 6, 7, 7, 2, 9];

const uniqueElement = arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))

console.log(`Unique element: ${uniqueElement}`);

const findUniqueElements = (arr) => {
    const elementCount = {};

    // Step 1: Count the occurrences of each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]]) {
            elementCount[arr[i]]++;
        } else {
            elementCount[arr[i]] = 1;
        }
    }

    // Step 2: Collect all elements that appear only once
    const uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]] === 1) {
            uniqueElements.push(arr[i]);
        }
    }

    return uniqueElements;  // Return an array of all unique elements
};

const uniqueElements = findUniqueElements(arr);
console.log(`Unique elements: ${uniqueElements}`);


