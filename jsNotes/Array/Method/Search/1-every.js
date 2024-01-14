// return true if all test case pass for each element and if not false 

// const age = [12, 14, 16, 19, 20];
// function tFun(age){
//     return age > 2;
// }
// let result = age.every(tFun);
// console.log(result);


function myFun(value, index, arrr)
{
    if(value % 2 == 0)
    {
       return true;
    }
}
const arr = [2,4,8,10];

let r = arr.every(myFun);
console.log(r);