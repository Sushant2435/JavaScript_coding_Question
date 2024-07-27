## JavaScript Basics

### Index
1. [Is JavaScript a dynamically typed language or a statically typed language?](#q1-is-javascript-a-dynamically-typed-language-or-a-statically-typed-language)
2. [What are the different datatypes in JavaScript?](#q2-what-are-the-different-datatypes-in-javascript-most-asked)
3. [What is Hoisting in JavaScript?](#q3-what-is-hoisting-in-javascript-most-asked)
4. [What is Temporal Dead Zone?](#q4-what-is-temporal-dead-zone)
5. [What are the differences between `let`, `var`, and `const`?](#q5-what-are-the-differences-between-let-var-and-const)


   
### Q1. Is JavaScript a dynamically typed language or a statically typed language?
JavaScript is a dynamically typed language. It means all type checks are done at runtime (when the program is executing). So, we can just assign anything to the variable and it works fine.

```javascript
let a;
a = 0;
console.log(a); // 0
a = "Hello";
console.log(a); // "Hello";
```
##
[Back to Top](#javascript-basics)

### Q2. What are the different datatypes in JavaScript? (Most asked)

**Primitive datatypes:**
- String
- Number
- Boolean
- Null
- Undefined
- Bigint
- Symbol

**Non-Primitive datatypes:**
- Array
- Object
- Date
##
[Back to Top](#javascript-basics)

### Q3. What is Hoisting in JavaScript? (Most asked)
- In other scripting/server side languages, variables or functions must be declared before using it.
- In javascript, variables and functions can be used before declaring it. The javascript compiler moves all the declarations of variables and functions on top. so there will not be any error. This is called hoisting.
#### 👉 Interview Tip: Mention buzz word 'temporal dead zone' for let & const in above answer so that interviewer will ask What is temporal dead zone. 😉
### What are the various things hoisted in javascript ?
  - Function declarations: Fully hoisted.
  - var - Hoisted
  - Arrow functions: Not hoisted
  - Anonymous Function expressions: Not hoisted
  - let and const - Hoisted but not initialized. (Temporal dead zone).
  - class declarations - Hoisted but not initialized.
##
[Back to Top](#javascript-basics)

### Q4. What is temporal dead zone ?
- It is a specific time period in the execution of javascript code where the variables declared with let and const exists but cannot be accessed until the value is assigned.
- Any attempt to access them result in reference errors.
```
function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }
```
##
[Back to Top](#javascript-basics)

### Q5. What are the differences let, var and const ? (Most asked)

**Scope:**
- Variables declared with `var` are function-scoped (available throughout the function where it's declared) or globally-scoped (if defined outside the function).
- Variables declared with `let` and `const` are block-scoped.

**Reassignment:**
- `var` and `let` can be reassigned.
- `const` cannot be reassigned.

**Hoisting:**
- `var` gets hoisted and initialized with `undefined`.
- `let` and `const` are hoisted to the top of the block scope but do not get assigned any value (temporal dead zone).
  
##
[Back to Top](#javascript-basics)

### Q6. List out some key features of ES6. (Most asked)

- **Arrow Functions**: Shorter way to write functions and automatically use the `this` value from their surrounding context.
- **Let and Const Declarations**: `let` allows you to create variables that are limited to a block, while `const` creates variables that cannot be changed after their initial value.
- **Destructuring Assignment**: Quickly extract values from arrays or properties from objects and assign them to variables.
- **Default Parameters**: Set default values for function parameters if no value is provided.
- **Template Literals**: Use backticks (`` ` ``) to write strings that can include variables and span multiple lines.
- **Spread and Rest Operators**: `...` can spread elements from an array or object, or gather multiple elements into a single array.
- **Promises**: Handle asynchronous operations by providing a way to work with data once it's ready or deal with errors if something goes wrong.
- **Classes**: Create objects with a clear structure and inheritance, similar to classes in other programming languages.
- **Modules**: Organize code into separate files that can be imported and exported, making it easier to manage and reuse.
- **Map, Set, WeakMap, WeakSet**: New data structures for storing unique values (`Set`), key-value pairs (`Map`), and weak references to objects (`WeakMap`, `WeakSet`).

👉 **Interview Tip:** Explain these features with these simple definitions to make good use of 2-3 minutes of interview time.
##
[Back to Top](#javascript-basics)
