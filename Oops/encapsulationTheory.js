// Encapsulation is a fundamental concept in object-oriented programming that refers to the
// practice of hiding the internal details of an object and exposing only the necessary 
// information to the outside world. Encapsulation helps
// in maintaining the integrity of data and ensures that it is not accessed or modified 
// inappropriately. JavaScript, being an object-oriented programming language, also supports 
// encapsulation. In this article, we will explore how encapsulation can be achieved in 
// JavaScript.

// Encapsulation in JavaScript: In JavaScript, encapsulation can be achieved using two
// techniques: using closures and using classes. Let’s examine each of these methods in more
// detail.

// 1. Using Closures: In JavaScript, closures are functions that have access to variables in 
// their outer lexical environment, even after the outer function has returned. Private 
// variables and methods can be created using closures.

/*

function BankAccount(accountNumber, accountHolderName, balance) { 
    let _accountNumber = accountNumber; 
    let _accountHolderName = accountHolderName; 
    let _balance = balance; 
  
    function showAccountDetails() { 
        console.log(`Account Number: ${_accountNumber}`); 
        console.log(`Account Holder Name: ${_accountHolderName}`); 
        console.log(`Balance: ${_balance}`); 
    } 
  
    function deposit(amount) { 
        _balance += amount; 
        showAccountDetails(); 
    } 
  
    function withdraw(amount) { 
        if (_balance >= amount) { 
            _balance -= amount; 
            showAccountDetails(); 
        } else { 
            console.log("Insufficient Balance"); 
        } 
    } 
  
    return { 
        deposit: deposit, 
        withdraw: withdraw 
    }; 
} 
  
let myBankAccount = BankAccount("123456", "John Doe", 1000); 
  
myBankAccount.deposit(500);  
// Output: Account Number: 123456 Account Holder Name:  
//John Doe Balance: 1500 
  
myBankAccount.withdraw(2000); // Output: Insufficient Balance

*/

// In this example, we have created a BankAccount object using a closure. The object has 
// three private variables: _accountNumber, _accountHolderName, and _balance. These variables
// are only accessible within the BankAccount function and cannot be accessed from outside.

// The showAccountDetails function is a private method that displays the account details.
// The deposit and withdrawal methods are public methods that can be accessed from outside 
// the object. When these methods are called, they update the _balance variable and call the
// showAccountDetails function to display the updated account details.

// 2. Using Classes: ES6 introduced the class syntax in JavaScript, which allows us to define
// classes and objects in a more structured way. Classes can be used to achieve encapsulation
// in JavaScript.

// Example: Consider the following example:
/*
class BankAccount { 
    constructor(accountNumber, accountHolderName, balance) { 
        this._accountNumber = accountNumber; 
        this._accountHolderName = accountHolderName; 
        this._balance = balance; 
    } 
  
    showAccountDetails() { 
        console.log(`Account Number: ${this._accountNumber}`); 
        console.log(`Account Holder Name: ${this._accountHolderName}`); 
        console.log(`Balance: ${this._balance}`); 
    } 
  
    deposit(amount) { 
        this._balance += amount; 
        this.showAccountDetails(); 
    } 
  
    withdraw(amount) { 
        if (this._balance >= amount) { 
            this._balance -= amount; 
            this.showAccountDetails(); 
        } else { 
            console.log("Insufficient Balance"); 
        } 
    } 
} 
  
let myBankAccount = new BankAccount("123456", "John Doe", 1000); 
myBankAccount.deposit(500);  
// Output: Account Number: 123456 Account Holder Name:  
//John Doe Balance: 150
*/
// In this example, we have created a BankAccount class using the class keyword. The class has
// three private variables: _accountNumber, _accountHolderName, and _balance. These variables
// are prefixed with an underscore to indicate that they are private variables.

// The showAccountDetails method is a public method that displays the account details. 
// The deposit and withdrawal methods are also public methods that can be accessed from 
// outside the object. When these methods are called, they update the _balance variable and 
// call the showAccountDetails method to display the updated account details.

// In this way, we can achieve encapsulation in JavaScript using classes.

// Benefits of encapsulation in JavaScript:

// Data Security: Encapsulation helps in protecting the data by preventing direct access to
//  private variables. This ensures that the data is not modified inappropriately.
// Code Reusability: Encapsulation makes it easier to reuse code since objects are 
// self-contained and can be used in different parts of the application.
// Maintenance: Encapsulation makes it easier to maintain the code since objects are 
// independent of each other and changes made to one object do not affect the others.
// Conclusion: Encapsulation is an important concept in object-oriented programming, and 
// JavaScript supports encapsulation using closures and classes. Encapsulation helps in 
// maintaining the integrity of data, improving code reusability, and making code maintenance
// easier. As a JavaScript developer, it is important to understand how encapsulation works
// and to use it effectively in your code.

