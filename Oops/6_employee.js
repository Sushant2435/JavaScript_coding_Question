// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Name of the Employee: ${name}`);
        console.log(`Monthly Salary: ${salary}`);
    }
    calaculateAnnualSalary() {
        return (this.salary * 12)
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    calaculateAnnualSalary() {
        const baseSalary = super.calaculateAnnualSalary()
        const bonus = 0.1;
        console.log(`Bonus (10% of the base salary): ${bonus}`);
        return (bonus * baseSalary) + baseSalary;
    }
}

const manager1 = new Manager('Angela Luca', 5000, 'Marketing');
const annualSalary1 = manager1.calaculateAnnualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Annual Salary: ${annualSalary1}`);

// Create another instance of the Manager class
const manager2 = new Manager('Jonelle Rozaliya', 5500, 'Marketing');
const annualSalary2 = manager2.calaculateAnnualSalary();

console.log(`Manager: ${manager2.name}`);
console.log(`Department: ${manager2.department}`);
console.log(`Annual Salary: ${annualSalary2}`);