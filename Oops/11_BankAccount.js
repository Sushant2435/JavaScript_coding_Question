// 11. Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount {
    constructor(account_number, name, balance) {
        this.account_number = account_number;
        this.name = name;
        this.balance = balance;

    }
    deposit(deposit_amt) {
        this.balance += deposit_amt;
        console.log(`Amount $${deposit_amt} deposited into account ${this.account_number}.`);
    }
    withdraw(withdraw_amt) {
        if (this.balance < withdraw_amt) {
            console.log(`Insufficient balance in account ${this.accountNumber}.`);
        } else {
            this.balance -= withdraw_amt
            console.log(`Amount $${withdraw_amt} withdraw form account ${this.account_number}.`);
        }
    }
    transfer(transfer_amt, recipientAccount) {
        if (transfer_amt <= this.balance) {
            this.balance -= transfer_amt;
            recipientAccount.deposit(transfer_amt)
            console.log(`Amount $${transfer_amt} transferred from account ${this.account_number} to account ${recipientAccount.account_number}.`);
        } else {
            console.log(`Insufficient balance in account ${this.account_number} for transfer.`);
        }
    }
    displayBalance() {
        console.log(`Account ${this.account_number} balance: $${this.balance}`);
    }
}
// Create multiple instances of the BankAccount class
const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
const account2 = new BankAccount('SB-019', 'Phokas Intan', 3000);
account1.displayBalance(); // Account SB-012 balance: $2000
account2.displayBalance(); // Account SB-019 balance: $3000

account1.deposit(500); // Amount $500 deposited into account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2500

account1.withdraw(200); // Amount $200 withdrawn from account SB-012.
account1.displayBalance(); // Account SB-012 balance: $2300

account1.transfer(700, account2); // Amount $700 transferred from account SB-01 to account SB-019.
account1.displayBalance(); // Account SB-012 balance: $1600
account2.displayBalance(); // Account SB-019 balance: $3700