// Object can be declare in 4 ways in js 
// 1- Creating object with a constructor
// 2- Using object literals
// 3- Creating object with Object.create() method
// 4- Using es6 classes

// creating objects with a constructor  
// function Animal(name, categorty, food){
//     this.name = name;
//     this.categorty = categorty;
//     this.food = food;
// }
// const ani1 = new Animal("cat", "hunter", "milk");
// console.log(ani1.name);
// console.log(ani1.categorty);
// console.log(ani1.food);

// const ani2  = new  Animal("Dog", "Securty", "Biscuit");
// console.log(ani2.name);
// console.log(ani2.categorty);
// console.log(ani2.food);



// using objects literals 
// const animal = {
//     name : "cat",
//     category :"hunter",
//     food: "Milk"
// }
// console.log(animal.name);
// console.log(animal.category);
// console.log(animal.food);


// using Object.create mehtod  

// const obj = Object.create(null);
// const obj1 = {
//     name:"alam",
//     class:"undefined"
// }
// const obj = Object.create(obj1);
// obj.roll = "2111";

// // console.log(obj.class);

// Note=> Question arises :::? 
// // if obj has no prop name then how does it access 
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('roll'));

8
// using es6 2016 class keyword 
// class Student{
//     constructor(name, roll, id)
//     {
//         this.name = name;
//         this.roll = roll;
//         this.id = id;
//     }
// }

// const s1 = new Student("alam", 23,"notmention");
// console.log(s1.name);