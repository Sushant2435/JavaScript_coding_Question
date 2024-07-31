// 7. Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
    constructor(title, author, publication) {
        this.title = title;
        this.author = author
        this.publication = publication
    }
    display() {
        console.log(`title: ${this.title}\nAuthor : ${this.author}\nPublication: ${this.publication}`)
    }
}
class Ebook extends Book {
    constructor(title, author, publication, price) {
        super(title, author, publication);
        this.price = price;
    }
    display() {
        super.display();
        console.log(`price: ${this.price}`)
    }
}

const ebook = new Ebook('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);

// Display the ebook details
ebook.display();