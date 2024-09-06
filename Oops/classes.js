// Classes - Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 

//Object - Objects are the instances of a class that are created to use the attributes and methods of a class

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