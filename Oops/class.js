
// using traditional method
function Vehicle(name, maker, engine)
{
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
Vehicle.prototype.getDetails = function (){
    return (`The bike name is ${this.name}`)
}

let bike1 = new Vehicle("Bullet", "royal", "234532");
console.log(bike1.name);
console.log(bike1.getDetails());


// using es6 2015 method to define class 
// class Vehicle{
//     constructor(name, maker, engine)
//     {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//    getDetails(){
//     return (`The name of the bike is ${this.name}`)
//    }
// }
// const bike1 = new Vehicle("hayabussa", "suzuki", 5347483);
// console.log(bike1.getDetails());




// class Emp{
//     constructor(name, id)
//     {
//         this.empName = name;
//         this.empId = id;
//     }
// }

// const e1 = new Emp("Shahabe", 855);
// console.log(e1.empName);
// console.log(e1.empId);