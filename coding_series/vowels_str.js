function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const element of str) {
        if (vowels.includes(element)) {
            count++;
        }
    }

    return count;
}
const exampleString = "Hello World!";
console.log(countVowels(exampleString));  // Output: 3
    