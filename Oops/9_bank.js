// 9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class bank {
    constructor() {
        this.bankName = '';
        this.branches = [];
    }
    addBranch(branch) {
        this.branches.push(branch);
        console.log(`${branch} added in your branched list`)
    }
    removeBranch(branch) {
        const updateBranches = this.branches.filter((item) => item !== branch)
        this.branches = updateBranches;
        console.log(`${branch} Deleted from your branched list`)

    }
    displayBranches() {
        if (this.branches.length === 0) {
            console.log('No branches available.');
        } else {
            console.log('List of Bank Branches:');
            this.branches.forEach((branch, index) => {
                console.log(`${index + 1}. ${branch}`);
            });
        }

    }
}

const bankObj = new bank();
bankObj.addBranch('Branch A');
bankObj.addBranch('Branch B');
bankObj.addBranch('Branch C');
// Display all branches
bankObj.displayBranches();
// Remove a branch
bankObj.removeBranch('Branch B');
// Display all branches again
bankObj.displayBranches();

