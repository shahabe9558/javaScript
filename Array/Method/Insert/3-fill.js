// fill method fill the element 
// it overwrites the arra element 
// syntax is 
// arrName.fill(value, start, end);

const arr = [1,2,3,4,5];
// arr.fill(6);
arr.fill(6, 3, arr.length);
console.log(arr);