// Classes - Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 

//Object - An Object is a unique entity that contains properties and methods. For example “a car” is a real-life Object, which has some characteristics like color, type, model, and horsepower and performs certain actions like driving. The characteristics of an Object are called Properties in Object-Oriented Programming and the actions are called methods

class Details {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    getDetails() {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}

const obj = new Details("Sushant", 21)
obj.getDetails()

// Traditional Way of defining an Object and simulating them as classes. Before ES6
function Vehicle(name1, age1) {
    this.name = name1;
    this.age = age1;

}
Vehicle.prototype.getDetails = function () {
    console.log('The name of the bike is ' + this.name);
}

const obj1 = new Vehicle("Aman", 21)
obj.getDetails()