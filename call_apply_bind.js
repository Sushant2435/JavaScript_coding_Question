const emp1 = {
    name: "vinay",
    age: 24

}
const emp2 = {
    name: "Sushant",
    College: "Dgi"
}

function invite() {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
}

invite.apply(emp1, ["Hello", "How are you?"]);