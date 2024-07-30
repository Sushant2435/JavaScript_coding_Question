// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.Include two methods to calculate rectangle area and perimeter.Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        let area = this.width * this.height;
        return (`The area of Rectangle is ${area} `)
    }
    perimeter() {
        let parimeter = 2 * (this.width + this.height);
        return (`The parimeter of Rectangle is ${parimeter} `)
    }
}

const obj = new Rectangle(4, 5)
console.log(obj.area())
console.log(obj.perimeter());