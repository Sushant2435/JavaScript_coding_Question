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

### Q7. What are limitations of arrow functions in javascript ?
- Arrow functions are introduced in ES6. They are simple and shorter way to write functions in javascript.
- Arrow functions cannot be accessed before initialization
- Arrow function does not have access to arguments object
- Arrow function does not have their own this. Instead, they inherit this from the surrounding code at the time the function is defined.
- Arrow functions cannot be used as constructors. Using them with the 𝙣𝙚𝙬 keyword to create instances throws a TypeError.
- Arrow functions cannot be used as generator functions.
- 👉 **Note:** Arrow functions + this combination questions will be asked here. Please explore on this combinations.
##
[Back to Top](#javascript-basics)

### Q8. What’s the spread operator in javascript ?
Spread operator is used to spread or expand the elements of an iterable like array or string into individual elements.
**Uses:**
- Concatenating arrays.
```
let x = [1,2];
let y = [3,4];
let z = […x,…y]   ⇒⇒ 1,2,3,4
```
- Copying arrays or objects.
```
let a = […x] // 1,2
```
- Passing array of values as individual arguments to a function.
```
  function createExample(arg1,arg2){
    console.log(arg1,arg2);
  }

  createExample(…a)
```
- **👉 Interview Tip**: Practice the above examples mentioned and showcase them in interviews to make interviewer think that you are a practical person. 😉
##
[Back to Top](#javascript-basics)

### Q9. What is rest operator in javascript ?
- Rest operator is used to condense multiple elements into single array or object.
- This is useful when we dont know how many parameters a function may receive and you want to capture all of them as an array.
```
 function Example(...args){
    console.log(args)
  }
  Example(1,2,3,4);          
```
##
[Back to Top](#javascript-basics)

- It is introduced in Es6.
- It allows us to assign the object properties and array values to distinct variables.
```
 const user = {
    "age": 10,
    "name": "Sushant"
  }

 const {age,name} = user;
 console.log(age,name) // 10,"Sushant"
```
```
const [a,b] = [1,2];
console.log(a,b) // 1,2
```
##
[Back to Top](#javascript-basics)

### Q10What are the differences between Map and Set ?

**Map**
- Map is the collection of key value pairs
- Map is two dimensional
- new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
- map.set(key, value) – stores the value by the key, returns the map itself
- map.get(key) – returns the value by the key, undefined if key doesn’t exist in map
- map.has(key) – returns true if the key exists, false otherwise.
- map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
- map.clear() – removes everything from the map.
- map.size – returns the current element count.
```
  let data = new Map();
  data.set("name","saikrishna");
  data.set("id","1");
  for(let item of data){
    console.log(item)
  }

  O/P
  ["name","saikrishna"]
  ["id","1"]
```
**Set**
- Set is a collection of unique values
- Set is one dimensional
- new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
- set.add(value) – adds a value, returns the set itself
- set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
- set.has(value) – returns true if the value exists in the set, otherwise false.
- set.clear() – removes everything from the set.
- set.size – is the elements count.
```
let data = new Set();
  data.add(1);
  data.add(”Sushant”);
  for(let item of data){
    console.log(item)
  }

  O/P
  1
  Sushant
```
##
[Back to Top](#javascript-basics)
### Q11. What are modules in javascript ?
- Modules allows us to break down the large piece of code into smaller parts.
- Modules helps us to write more reusable and maintenable code.
- Modules can be imported and exported using import and export statements.

### Q12. What is the difference between 'Pass by Value' and 'Pass by Reference'?
In JavaScript, whenever a function is called, the arguments can be passed in two ways, either pass by value or pass by reference.
- Primitive datatypes such as string, number,boolean,null and undefined are passed by value.
- Non -primitive datatypes such as object,arrays or functions are passed by reference.
In Pass by value, parameters passed as an arguments creates their own copy. So any changes made inside the function are made to the copied value so it will not affect the original value.
```
 // Pass by value example
  let num = 10;

  function changeNum(value) {
      value = 20;
      console.log(value);  // Output: 20
  }

  changeNum(num);
  console.log(num);  // Output: 10   
```
In Pass by reference, parameters passed as an arguments does not creates their own copy. so any changes made inside the function will affect the original value.
```
 // Pass by reference example
  let arr = [1, 2, 3];

  function addToArr(value) {
      value.push(4);
      console.log(value);  // Output: [1, 2, 3, 4]
  }

  addToArr(arr);
  console.log(arr);  // Output: [1, 2, 3, 4]
```
##
[Back to Top](#javascript-basics)
