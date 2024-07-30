// Inheritance: It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects.
class person {
    constructor(firstname, lastname) {
        this.firstName = firstname
        this.lastName = lastname
    }
    toString() {
        return (`Name of the person is ${this.firstName}`)
    }
}

class Students extends person {
    constructor(name, id) {
        super(name)
        this.id = id
    }
    toString() {
        return (`${super.personName()} and Student id :${this.id}`)
    }
}

const obj = new Students("Sushant", 22161);
console.log(obj.getDetails());