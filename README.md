## JavaScript Basics

### Index
1. [Is JavaScript a dynamically typed language or a statically typed language?](#q1-is-javascript-a-dynamically-typed-language-or-a-statically-typed-language)
2. [What are the different datatypes in JavaScript?](#q2-what-are-the-different-datatypes-in-javascript-most-asked)
3. [What is Hoisting in JavaScript?](#q3-what-is-hoisting-in-javascript-most-asked)
4. [What is Temporal Dead Zone?](#q4-what-is-temporal-dead-zone)
5. [What are the differences between `let`, `var`, and `const`?](#q5-what-are-the-differences-between-let-var-and-const-most-asked)
6. [List out some key features of ES6.](#q6-list-out-some-key-features-of-es6-most-asked)
7. [What are the limitations of arrow functions in JavaScript?](#q7-what-are-the-limitations-of-arrow-functions-in-javascript)
8. [What’s the spread operator in JavaScript?](#q8-whats-the-spread-operator-in-javascript)
9. [What is the rest operator in JavaScript?](#q9-what-is-the-rest-operator-in-javascript)
10. [What are the differences between Map and Set?](#q10-what-are-the-differences-between-map-and-set)
11. [What are modules in JavaScript?](#q11-what-are-modules-in-javascript)
12. [What is the difference between 'Pass by Value' and 'Pass by Reference'?](#q12-what-is-the-difference-between-pass-by-value-and-pass-by-reference)
13. [What is the difference between map and filter?](#q13-what-is-the-difference-between-map-and-filter-frequently-asked)
14. [What is the difference between map() and forEach()?](#q14-what-is-the-difference-between-map-and-foreach-frequently-asked)
15. [What is the difference between for-in and for-of?](#q15-what-is-the-difference-between-for-in-and-for-of)
16. [What is the difference between find and findIndex?](#q16-what-is-the-difference-between-find-and-findindex)
17. [What is the difference between Pure and Impure functions?](#q17-what-is-the-difference-between-pure-and-impure-functions)
18. [What are the differences between call(), apply() and bind()?](#q18-what-are-the-differences-between-call-apply-and-bind-frequently-asked)
19. [What are the different ways to create objects in JavaScript?](#q19-what-are-the-different-ways-to-create-object-in-javascript-most-asked)
20. [What’s the difference between Object.keys(), Object.values(), and Object.entries()?](#q20-whats-the-difference-between-objectkeys-values-and-entries)
21. [What’s the difference between Object.freeze() and Object.seal()?](#q21-whats-the-difference-between-objectfreeze-vs-objectseal)
22. [What is a generator function in JavaScript?](#q22-what-is-generator-function-in-javascript)
23. [What is IIFE?](#q23-what-is-iife)
24. [What is CORS?](#q24-what-is-cors-most-asked)
25. [What are the differences between TypeScript and JavaScript?](#q25-what-are-the-differences-between-typescript-and-javascript)
26. [What is the difference between authentication and authorization?](#q26-what-is-authentication-vs-authorization-most-asked)
27. [What are the differences between null and undefined?](#q27-what-are-the-differences-between-null-and-undefined)
28. [What is the difference between == and === in JavaScript?](#q28-what-is-the-difference-between-==and-===in-javascript)
29. [Slice vs Splice in JavaScript?](#q29-slice-vs-splice-in-javascript-most-helpful-in-problem-solving)
30. [What is `setTimeout` in JavaScript?](#q30-what-is-settimeout-in-javascript)
31. [What is `setInterval` in JavaScript?](#q31-what-is-setinterval-in-javascript)
32. [What are Promises in JavaScript?](#q32-what-are-promises-in-javascript)
33. [What is a call stack in JavaScript?](#q33-what-is-a-call-stack-in-javascript)
34. [What is a closure?](#q34-what-is-a-closure)



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

### Q10. What are the differences between Map and Set ?

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

### Q13. What is the difference between map and filter ? (Frequently asked)
- Both map and filter are useful in JavaScript when working with an arrays.
- map transforms each element of an array and creates a new array which contains the transformed elements. whereas filter will creates a new array with only those elements which satisfies the specified condition.

##
[Back to Top](#javascript-basics)

### Q14. What is the difference between map() and forEach() (Frequently asked)
- map method is used to transform the elements of an array. Whereas forEach method is used to loop through the elements of an array.
- map method will return a new array with the transformed values. forEach method does not return a new array.
- map method can be used with other array methods like filter method. whereas forEach method cannot be used with other array methods as it does not return any array.
**Map**
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
// Output: [2, 4, 6, 8, 10] (creates a new array with doubled values)

```
***ForEach**
```
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});
// Output: 2, 4, 6, 8, 10 (but does not create a new array)

```

##
[Back to Top](#javascript-basics)

### Q15. What is the difference between for-in and for-of ?
Both for-in and for-of are used to iterate over the datastructure.
**for-in:**
- for-in iterates over the enumerable property keys of an object.
```
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Output:
// make: Toyota
// model: Corolla
// year: 2020

```
**for-of:**
- for-of is used to iterate over the values of an iterable object.
- Examples of iterable objects are array,string,nodelists etc. (for of on object returns error)
```
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// cherry

```

##
[Back to Top](#javascript-basics)

### Q16. What is difference between find vs findIndex ?
**find:**
- It will return the first element of array that passes specified condition.
```
 function findMethod(){
  let arr = [{id:1,name:"Sushant"},{id:2,name:"Sharma"}];
  let data = arr.find(x=> x.id==2)
  console.log(data)
  }

  findMethod()

  Output:
  {id:2,name:"Sharma"}
```
**findIndex:**
- It will return the index of first element of an array that passes the specified condition.`
```
  function findMethod(){
  let arr = [{id:1,name:"sai"},{id:2,name:"krishna"}];
  let data = arr.findIndex(x=> x.id==2)
  console.log(data)
  }

  findMethod()

  Output:
  2
```
##
[Back to Top](#javascript-basics)

### Q17. What is the difference between Pure and Impure functions?
**Pure Functions:**
- Pure functions are the functions which will return same output for same arguments passed to the function.
- This will not have any side effects.
- It does not modify any non local state.
```
function greeting(name) {
  return 'Hello $ {name}';
}
console.log(greeting("Sushant Sharma"));
```
**Impure Functions:**
-Impure functions are the functions which will return inconsistent output for same arguments passed to the function.
-This will have side effects.
-This will modify non local state.
```
  let message = "good morning";
  function greeting1(name) {
    return 'Hello $ {name} , $ {message}';
  }
  console.log(greeting1("Sushant Sharma"));
```

##
[Back to Top](#javascript-basics)
### Q18. What are the differences between call(), apply() and bind() ? (Frequently asked)
- Call method will invoke the function immediately with the given this value and allows us to pass the arguments one by one with comma separator.
- Apply method will invoke the function immediately with given this value and allows us to pass the arguments as an array.
- Bind method will return a new function with the given this value and arguments which can be invoked later.

**Call**
- Purpose: The call method allows you to call a function with a specified this value and arguments provided individually.
- Usage: Use call when you want to execute a function immediately with a specific this context and pass arguments individually.
  ```
  function greet2(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
   const person2 = {
       name: 'Aman'
   };
   // Using call to call greet with 'person' as 'this' and individual arguments
   greet2.call(person2, 'Hello', '!'); // Output: Hello, Aman!
  ```
**Apply**

- Purpose: apply is used to call a function with a given this value and arguments provided as an array (or an array-like object).
- Usage: You use apply when you want to call a function immediately with a specific context and arguments.

```
const person = {
    name: 'Sushant Sharma'
};

function greet(greeting, punctuation) {
    console.log(`${greeting},${this.name},${punctuation}`)
}

greet.apply(person, ['Hello', "!"])
```
**Bind**

- Purpose: bind creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- Usage: You use bind when you want to create a new function with a specific context and optionally pre-set arguments. The new function can be called later.
```
function greet1(greeting, punctuation) {
    console.log(`${greeting},${this.name},${punctuation}`)
}
const person1 = {
    name: 'Radhe Sharma'
};

const greetPerson = greet1.bind(person1, 'Hello')
greetPerson('!')
```

##
[Back to Top](#javascript-basics)
### Q19. What are the different ways to create object in javascript ? (Most asked)
**Object literal :**
```
let userDetails = {
    name: "Sushant",
    city: "Delhi"
  }
```
**Object constructor :**
```
let userDetails = new Object();
userDetails.name = "Sushant";
userDetails.city = "Delhi";
          
```
**Object.Create() :**
- This is used when we want to inherit properties from an existing object while creating a new object.
```
let animal = {
 name: "Animal name"
}

let cat = Object.create(animal);
```
**Object.assign() :**
- This is used when we want to include properties from multiple other objects into new object we are creating.
```
let lesson = {
    lessonName: "Data structures"
  };

  let teacher= {
    teacher: "Sushant"
  };

  let course = Object.assign({},lesson,teacher);
```

##
[Back to Top](#javascript-basics)

### Q20. Whats the difference between Object.keys,values and entries ?
- Object.keys(): This will return the array of keys
- Object.values(): This will return the array of values
- Object.entries(): This will return array of [key,value] pairs. (Practice example for this - this might be asked)
```
 let data = {
    name: "Sushant",
    lang: "English"
  };

  Object.keys(data)  // ["name","lang"]
  Object.values(data) // ["Sushant","english"]
  Object.entries(data) // [["name","Sushant"],["lang","English"]]
```

##
[Back to Top](#javascript-basics)

### Q21. Whats the difference between Object.freeze() vs Object.seal()
**Object.freeze:**
- Will make the object immutable ( prevents the addition of new propeties and prevents modification of existing properties)
```
 let data = {
    a : 10
  };

  Object.freeze(data);
  data.a= 20;
  data.c = 30;

  console.log(data) 

  output: {
    a: 10
  }
```

**Object.Seal():**
- Will prevent the addition of new properties but we can modify existing properties.
```

  let data = {
    a : 10
  };

  Object.seal(data);
  data.a = 20;
  data.c = 30;

  console.log(data)

  Output: 
  data: {
    a: 20
  }
```


##
[Back to Top](#javascript-basics)
### Q22. What is generator function in javascript ?
A generator function is a function which can be paused and resumed at any point during execution.
They are defined by using function* and it contains one or more yield expressions.
The main method of generator is next(). when called, it runs the execution until the nearest yield.
It returns an object which contains 2 properties. i.e., done and value.
- done: the yielded value
- value: true if function code has finished. else false.
```
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
    return 4
  }
  
  const generator = generatorFunction();
  console.log(generator.next()); // Output: { value: 1, done: false }
  console.log(generator.next()); // Output: { value: 2, done: false }
  console.log(generator.next()); // Output: { value: 3, done: false }
  console.log(generator.next()); // Output: { value: 4, done: true }
```

##
[Back to Top](#javascript-basics)
### Q23. What is IIFE ?
IIFE means immediately invoked function expression.
functions which are executed immediately once they are mounted to the stack is called iife.
They does not require any explicit call to invoke the function.
```
  (function(){
    console.log("Sushant Sharma")
  })()
```
##
[Back to Top](#javascript-basics)

### Q24. What is CORS ? (Most asked)
👉 **Interview Tip:** This defination is more than enough so prepare this below answer well.
CORS means cross origin resource sharing.
It is a security feature that allows the webapplications from one domain to request the resources like Api’s/scripts from another domain.
cors works by adding specific http headers to control which origins have access to the resources and under what conditions.
Good Reference: https://dev.to/lydiahallie/cs-visualized-cors-5b8h

##
[Back to Top](#javascript-basics)
### Q25. What are the difference between typescript and javascript ?
- Typescript is the superset of javascript and has all the object oriented features.
- Javascript is a dynamically typed language whereas typescript is a statically typed language.
- Typescript is better suited for large scale applications where as javascript is suited for small scale applications.
- Typescript points out the compilation errors at the time of development. Because of this, getting runtime errors is less likely.
- Typescript supports interfaces whereas javascript does not.
- Functions have optional parameters in typescript whereas in javascript does not have it.
- Typescript takes longer time to compile code.
👉 **Interview Tip:** If your interview contains typescript then this is a 99% dam sure question. Prepare these differences blindly.


##
[Back to Top](#javascript-basics)

### Q26. What is authentication vs authorization ? (Most asked)

**Authentication:**
Its the process of verifying who the user is.
**Authorization:**
Its the process of verifying what they have access to. What files and data user has access to.
👉 **Interview Tip:** For this question, learn **jwt token mechanism** and tell that you have implemented this in your project. This helps a lot.This kills atleast 3-4 min of interview time 😉
Good Reference: https://www.youtube.com/watch?v=7Q17ubqLfaM


##
[Back to Top](#javascript-basics)
### Q27. What are the differences between null and undefined ?
**Null:**
If we assign null to a variable, it means it will not have any value
**Undefined:**
means the variable has been declared but not assigned any value yet.

##
[Back to Top](#javascript-basics)

### Q28. What is the difference between == and === in javascript ?
== will check for equality of values where as === willl check for equality as well as datatypes.
##
[Back to Top](#javascript-basics)

### Q29. Slice vs Splice in javascript ? (Most helpful in problem solving)
**Slice:**
If we want to create an array that is subset of existing array with out changing the original array, then we will use slice.
```
let arr = [1,2,3,4];
let newArr = arr.slice(1,3);

console.log(newArr) // [2,3]
```
**Splice:**
If we want to add/delete/replace the existing elements in the array, then we will use splice.
```
  let arr = [1,2,3,4,5,0,10];
  let newArr = arr.splice(2,4,8,9,6);
  // splice(startIndex,numberOfItemsToRemove,replaceElements)

  console.log(arr); //  [1,2,8,9,6,10]
  console.log(newArr); // [3,4,5,0]
```
##
[Back to Top](#javascript-basics)

### Q30. What is setTimeOut in javascript ?
setTimeOut is used to call a function or evaluate an expression after a specific number of milliseconds.
```
setTimeOut(function(){
console.log("Prints Hello after 2 seconds")
},2000);

// Logs message after 2 seconds
```
👉 **Interview Tip:** Most asked in output based and problem solving so learn syntax more. Practice some examples.


##
[Back to Top](#javascript-basics)

### Q31. What is setInterval in javascript ?
setInterval method is used to call a function or evaluate an expression at specific intervals.
```
setInterval(function(){
   console.log("Prints Hello after every 2 seconds");
},2000);
```
👉 **Interview Tip:** Most asked in output based and problem solving so learn syntax more. Practice some examples.

##
[Back to Top](#javascript-basics)
### Q32. What are Promises in javascript ?
👉 **Interview Tip:** When this is asked cover all below points so that he will not ask any other question on promises 😈.
Promise is an object which represents the eventual completion or failure of an asynchronous operation in javascript.
At any point of time, promise will be in any of these below states.,
- Fulfilled: Action related to promise is succeded.
- Rejected: Action related to the promise is failed.
- Pending: Promise is neither fulfilled nor rejected
Promise can be consumed by registering the functions using .then() and .catch() methods.
```
let promise = new Promise((res, rej) => {
    setTimeout(() => {
        let age = 21;
        if (age > 30) {
            res("you eligible")
        } else {
            rej("not eligible")
        }
    }, 2000)
})

promise.then(res => console.log(res)).catch(rej => console.log(rej))
```
##
[Back to Top](#javascript-basics)
### Q33. What is a callstack in javascript ?
- Callstack will maintain the order of execution of execution contexts.

##
[Back to Top](#javascript-basics)

### Q34. What is a closure ? (Most asked in all the interviews 99% chance)
Defination: A function along with its outer environment together forms a closure
Each and every function in javascript has access to its outer lexical environment means access to the variables and functions present in the environments of its parents
Even when this function is executed in some outer scope(not in original scope) it still remembers the outer lexical environment where it was originally present in the code.
```
function Outer(){
      var a = 10;
      function Inner(){
        console.log(a);
      }
      return Inner;
  }

  var Close = Outer();
  Close();
```
- Lexical Scope: Closures leverage the lexical scoping of variables. A function can access variables defined in its outer function even after the outer function has returned.

- Encapsulation: Closures can be used to create private variables and functions that are not accessible from outside the function.
```
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
```
**Closures can be used to create private variables**
```
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
```

**Private function example**

```
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
```
[Back to Top](#javascript-basics)
