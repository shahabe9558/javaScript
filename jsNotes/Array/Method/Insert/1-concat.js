// Syntax 
// arr.concat(arr2, arr3.........arrN);
const arr = [1,3,5,7,9];
const arr2 = [2,4,6,8];
const arr3 = arr.concat(arr2);
console.log(arr3);

const a = [1,2,3,4,5];
const s = ["A", "B", "C"];
const r = s.concat(a);
console.log(r);

const c = [1,2,3,4];
const d = [[2,4,5], [5,6,7]];
const f = c.concat(d);
console.log(f);
