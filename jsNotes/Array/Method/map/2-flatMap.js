

function myFun(value, index, arr)
{
    return value * 2;
}

const arr = [1,2,3,4,5,6];
console.log(arr.flatMap(myFun));
console.log(arr);