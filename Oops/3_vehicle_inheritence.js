class Vehicle {
    constructor(make, model, year) {
        this.makeName = make;
        this.model = model;
        this.year = year;
    }
    display() {
        return (`company : ${this.makeName} \n Model : ${this.model} \n year:  ${this.year}`)
    }

}

class car extends Vehicle {
    constructor(makeName, model, year, doors) {
        super(makeName, model, year);
        this.doors = doors;
    }
    display() {
        return (`${super.display()} \n doors: ${this.doors}`)
    }


}

const obj = new car('honda', 'shift', 2012, 4)

console.log(obj.display())