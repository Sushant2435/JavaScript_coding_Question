"use strict"

// Eliminates Some JavaScript Silent Errors:

x = 3.14;

// Prevents Accidental Globals

function myFunction() {
    y = 3.14; // Throws a ReferenceError in strict mode
}

myFunction()


// Disallows Duplicates in Object Literals and Function Parameters:

let obj = {
    prop: 1,
    prop: 2 // SyntaxError: Duplicate data property in object literal
};

function sum(a, a, c) { // SyntaxError: Duplicate parameter name not allowed in this context
    return a + a + c; // wrong if a is 1
}

