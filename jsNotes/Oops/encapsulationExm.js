// to declare private variable de define with underscore
// encapsulation means hiding the details of objects only showing relevant things
// encapsulation means wrap up objects data
class BankAccount{
    constructor(accountNumber, holderName, balance)
    {
        this._accountNumber = accountNumber;
        this._holderName = holderName;
        this._balace = balance;
    }
    showDetails(){
        console.log(`Account Number is ${this._accountNumber}`);
        console.log(`Account Holder is ${this._holderName}`);
        console.log(`Account balance is ${this._balace}`);
    }
    deposite(amount){
        this._balace = this._balace + amount;
        this.showDetails();
    }
    withdraw(amount){
        if(this._balace >= amount){
            this._balace -= amount;
            this.showDetails();
        }
        else{
            console.log("Insuffecient Balance");
        }
    }
}
let acc1 = new BankAccount(1234, "Alam", 500);
// acc1.showDetails();
acc1.deposite(500);
acc1.withdraw(1001);