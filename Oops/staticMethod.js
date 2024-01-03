// Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.

class Car {
    constructor(name)
    {
        this.name = name;
    }
    static sayHello(x){
        return x.name;
    }
}
const carOb = new Car("Levender");

// you can access static method using object by passong object as parameter
console.log(Car.sayHello(carOb));

// console.log(Car.sayHello());
// console.log(carOb.sayHello());
// console.log(carOb.name);