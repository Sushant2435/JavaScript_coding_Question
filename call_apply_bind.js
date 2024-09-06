
// call......................
// Purpose: The call method allows you to call a function with a specified this value and arguments provided individually.
//Usage: Use call when you want to execute a function immediately with a specific this context and pass arguments individually.

function greet2(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person2 = {
    name: 'Aman'
};

// Using call to call greet with 'person' as 'this' and individual arguments
greet2.call(person2, 'Hello', '!'); // Output: Hello, Aman!


// apply...................

// Purpose: apply is used to call a function with a given this value and arguments provided as an array (or an array-like object).
// Usage: You use apply when you want to call a function immediately with a specific context and arguments.


const person = {
    name: 'Sushant Sharma'
};

function greet(greeting, punctuation) {
    console.log(`${greeting},${this.name},${punctuation}`)
}

greet.apply(person, ['Hello', "!"])

// bind....................

// Purpose: bind creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// Usage: You use bind when you want to create a new function with a specific context and optionally pre-set arguments. The new function can be called later.

function greet1(greeting, punctuation) {
    console.log(`${greeting},${this.name},${punctuation}`)
}
const person1 = {
    name: 'Radhe Sharma'
};

const greetPerson = greet1.bind(person1, 'Hello')
greetPerson('!')