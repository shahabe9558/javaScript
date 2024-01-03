
// inherited property has newObj propety to 
const obj = {
    name : "alam",
}
const newObj = new Object(obj);
newObj.p2 = "asdf";
console.log(newObj.hasOwnProperty('name'));
console.log(newObj.hasOwnProperty('p2'));


// const obj = new Object();
// obj.p1 = 10;
// console.log(obj.hasOwnProperty('p1'));

