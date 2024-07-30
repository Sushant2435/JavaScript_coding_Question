// <!-- Abstraction: Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.  -->
// Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation. 
// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;

    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`name ${this.name} and adress is ${this.add}`)
    }
}

let personObj = new person('Sushan', 21)

personObj.add_Address("Gurgaon")
personObj.getDetails()

// Abstraction example
function Student(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }

    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person = new Student('Mukul', 'Latiyan');
console.log(person.firstname);
console.log(person.getDetails_noaccess);
console.log(person.getDetails_access());