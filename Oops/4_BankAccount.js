// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAcccount {
    constructor(acc_num, balance) {
        this.acc_num = acc_num;
        this.balance = balance;
        console.log(`Account Number : ${this.acc_num}\nAccount Opening Amount ${this.balance}`)
    }
    deposite(deposite_amount) {
        this.balance += deposite_amount
        return (`updated balance is ${this.balance}`)
    }
    withdraw(withdraw_amount) {
        if (this.balance < withdraw_amount) {
            return (`Amount is not sufficient in your account`)
        } else {
            this.balance -= withdraw_amount;
            return (`updated balance is ${this.balance}`)
        }
    }
    displayBalance() {
        return (`Account Balance: ${this.balance}`);
    }
}

const obj = new BankAcccount(22161, 200);
console.log(obj.deposite(20))
console.log(obj.withdraw(40))
console.log(obj.displayBalance());
console.log(obj.deposite(50))
console.log(obj.withdraw(60))
console.log(obj.displayBalance());