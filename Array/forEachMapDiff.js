// diff betweem for each and map method


function callFun(value, index, arr)
{
    // arr[index] = value * 2;
    return value * 2;
}
const arr = [1,2,3,4,5];
arr.forEach(callFun);
console.log(arr);
