const generateArrayNum = (num) => [...Array(num).keys()].map(i => i);

console.log(generateArrayNum(10))