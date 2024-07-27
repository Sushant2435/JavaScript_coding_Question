// Lexical Scope: Closures leverage the lexical scoping of variables. A function can access variables defined in its outer function even after the outer function has returned.

// Encapsulation: Closures can be used to create private variables and functions that are not accessible from outside the function.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const closureFunction = outerFunction('I am outside');
closureFunction('I am inside');
// Output:
// Outer Variable: I am outside
// Inner Variable: I am inside


//   Closures can be used to create private variables and functions:

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount()); // Output: 2
console.log(counter.decrement()); // Output: 1

// Private function example

function createPerson(name) {
    // Private function
    function greet() {
        return `Hello, my name is ${name}.`;
    }

    // Public function
    return {
        introduce: function () {
            return greet(); // Uses the private function
        }
    };
}

const person = createPerson('Alice');
console.log(person.introduce()); // Output: Hello, my name is Alice.
console.log(person.greet());    // Output: TypeError: person.greet is not a function
