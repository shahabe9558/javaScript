// const arr = ["A", "B", "C", "D", "E"];
// create a map for value 
const arr = [1,2,3,4,5];
const a = arr.entries();
for(let i of a)
{
    console.log(i);
}
// does not change the original array 
console.log(arr);