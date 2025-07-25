function createBankAccount(balance) {
    let account = {
        deposit: function (amount) {
            balance+=amount;
            return balance;
        },
        withdraw: function (amount) {
            balance-=amount;
            return balance;
        },
        getBalance: function () {
            return balance
        }
    }
    return account;
};
let account =createBankAccount(100);
// console.log(account.deposit(50));
// console.log(account.withdraw(20))
console.log(account.getBalance(20));
