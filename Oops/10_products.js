// 10. Write a JavaScript program that creates a class called Product with properties for product ID, name, and price.Include a method to calculate the total price by multiplying the price by the quantity.Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period.Override the total price calculation method to include the warranty period.Create an instance of the PersonalCareProduct class and calculate its total price.

class Product {
    constructor(product_id, name, price) {
        this.product_id = product_id;
        this.name = name;
        this.price = price;
    }
    totalPrice(quantity) {
        return (this.price * quantity)
    }
}

class PersonalCareProduct extends Product {
    constructor(product_id, name, price, warranty_period) {
        super(product_id, name, price)
        this.warranty_period = warranty_period;
    }
    totalPrice(quantity) {
        const totalPrice = super.totalPrice(quantity);
        return totalPrice + this.warranty_period
    }

}

const personalCareProduct = new PersonalCareProduct(1, 'Shampoo', 10, 2);

// Calculate the total price
const totalPrice = personalCareProduct.totalPrice(3);

console.log(`Total Price: ${totalPrice}`);