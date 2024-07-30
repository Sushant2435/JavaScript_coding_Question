// 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class shape {
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be overridden in subclasses");
    }
}
class Circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return ((this.base * this.height) / 2);
    }

}

const circleObj = new Circle(4);
const TriangleObj = new Triangle(10, 12);
console.log(circleObj.calculateArea());
console.log(TriangleObj.calculateArea());