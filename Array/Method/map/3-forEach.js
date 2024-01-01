
// by default return undefined
function myFun(value, index, arr)
{
    arr[index] = value * 2;
}

const arr = [1,2,3,4,5];
console.log(arr.forEach(myFun));
console.log(arr);