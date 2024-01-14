const obj = {
    name : "alam"
}
// inherited object property can not be deleted
const obj2 = Object.create(obj);
obj2.roll = 20;
delete obj2.roll;
// console.log(obj2.roll);
delete obj2.name;
console.log(obj2.name);