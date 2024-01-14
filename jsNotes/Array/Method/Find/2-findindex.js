// return index of first elememtn that passes the test case otherwise -1;
function myFun(value, index, arr)
{
    return value > 6;
}

const arr = [1,2,3,4,5];
console.log(arr.findIndex(myFun));