
// Encapsulation - Wrapping (togetther)data and function into the single unit
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    add_Address(add) {
        this.add = add;
    }
    get_Details() {
        console.log(`Name is ${this.name} and age is ${this.age} and address is ${this.add}`)
    }
}

const obj = new person("Sushant", 21);
obj.add_Address("Gurgaon")

obj.get_Details()