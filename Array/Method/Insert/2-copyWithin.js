// syntax
// arrName.copyWithin(target, start, end);
// it ovelap the original array
const arr = [1,3,5,7];
arr.copyWithin(3, 1);
console.log(arr);
arr.copyWithin(2, 0, 2);
console.log(arr);