function isAnagram(str1, str2) {
    return ([...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join(''))
}
console.log(isAnagram('listen', 'netsil'))