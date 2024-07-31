// 12. Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University {
    constructor(uni_name, departments) {
        this.uni_name = uni_name;
        this.departments = [];

    }
    addDepartment(department) {
        this.departments.push(department);
        console.log(`Department "${department}" added to ${this.name}.`);
    }
    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
            console.log(`Department "${department}" removed from ${this.name}.`);
        } else {
            console.log(`Department "${department}" does not exist in ${this.name}.`);
        }

    }
    display() {
        console.log(`Departments in ${this.uni_name}:`);
        if (this.departments.length === 0) {
            console.log('No departments available.');
        } else {
            this.departments.forEach((department, index) => {
                console.log(`${index + 1}. ${department}`);
            });
        }

    }
}
// Create an instance of the University class
const university = new University('ABC University');
// Perform operations on the university
university.display(); // Departments in ABC University: No departments available.

university.addDepartment('Science');
university.addDepartment('Mathematics');
university.addDepartment('Physics');
university.display();
// Departments in ABC University:
// 1. Computer Science
// 2. Mathematics
// 3. Physics

university.removeDepartment('Mathematics');
university.display();
// Departments in ABC University:
// 1. Science
// 2. Physics

university.removeDepartment('Chemistry');
// Department "Chemistry" does not exist in ABC University