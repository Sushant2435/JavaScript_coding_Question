// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.countryName = country;
    }
    display() {
        console.log(`Name : ${this.name} \n Age is : ${this.age} \n Country is : ${this.countryName}`)
    }
}

const personObj = new Person("Sushant", 21, "India")
const personObj1 = new Person("Vinay", 23, "pakistan")

personObj.display();
personObj1.display()