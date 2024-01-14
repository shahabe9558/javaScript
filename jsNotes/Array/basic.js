// declaring a array 
// we use const keyword to declare a arary 
// Note=> Array element can be anythting like array itself objects literal(values) etc 
// both way of initializtion is valid but use first one to maintain 
// const arr = [1,2,3,4,4,5];
// const arr1 = new Array(1,2,3,4,5);

const arr = [30];
const arr2 = new Array(30); // this will produce unexpected result so use above method
console.log(arr[0]);
console.log(arr2[0]);