
// Object literal syntax
//1. ...object literal..............................................
// const obj = {
//     key: "value",
//     name: "Sushant",
//     sum: function (a, b) {
//         let c = a + b;
//         console.log(c)
//     },
//     arr: [2, 3, 4],
//     obj2: {
//         name: "aman",
//         age: 23
//     }
// }

// obj.sum(2, 3);
// console.log(obj.arr[2])
// console.log(obj.obj2.age)

// Object constructor:
//2. ...object constructor...........................................

// var obj = new Object()
// obj["age"] = 24;
// obj["name"] = "Sushant";
// delete obj["name"];
// console.log(obj)

// 3.Object's create method:...................................

// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
// }
// let carProps = {
//     type: {
//         value: 'Volkswagen'
//     },
//     model: {
//         value: 'Golf'
//     }
// }

// var car = Object.create(vehicle, carProps);
// console.log(car);

// Function constructor:

function Person(name) {
    this.name = name;
    this.age = 21;
}
var object = new Person("Sudheer");




