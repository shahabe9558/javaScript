
const arr = [1,2,3];
let arr2 = Math.max.apply(null, arr);
console.log(arr2);
console.log(arr.indexOf(arr2));







// reuse of method from another objects;
// it takes array as arguments and call method take arguments
// let obj ={
//     speak:function(){
//         console.log("Human is speaking");
//     }
// }
// let obj2 = {
//     animalSpeak:function(){
//         console.log("Animal is not speaking");
//     }
// }
// obj.speak.apply(obj2);

