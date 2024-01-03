// inheritance prototype 
// let animal = {
//     aimalEats: true,
// };
// let rabbit = {
//     rabbitJumps: true,
// };
// rabbit.__proto__ = animal;
// console.log(rabbit.animalEats);
// console.log(rabbit.rabbitJumps);

// let animal = {
//     animalEats: true,
// };
 
// let rabbit = {
//     rabbitJumps: true,
// };
 
// // Sets rabbit.[[Prototype]] = animal
// rabbit.__proto__ = animal;
// console.log(rabbit.animalEats);
// console.log(rabbit.rabbitJumps);

// m2 to inherit the properrty using setpropertyOf method
const animal ={
    enimalEats: true,
}
let rabbit ={
    rabbitJumps : true,
}

Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit.enimalEats);
// will undefined bcz no property exit in animal
console.log(animal.rabbitJumps);
