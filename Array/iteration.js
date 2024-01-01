
// M3 - using foreach function
function myFunction(value, index, arr)
{
   console.log(value);
   console.log(index);
   console.log(arr);
}
const arr = [1,2,3,4,5];
arr.forEach(myFunction)



// M2 - using for of 
// const arr = [1,2,3,4,5];
// for(let i of arr)
// {
//     console.log(i);
// }

// M1 - using for loop
// const arr = [1,2,3,4,5];
// for(let i =0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }