
function sumOfElement(arr, index = 0)
{
   if(index == arr.length -1)
   {
    return arr[index];
   }
   let sum = 0;
   sum = arr[index] + sumOfElement(arr, index + 1);
   return sum;
}

const arr = [3,2,5,1,6];
console.log(sumOfElement(arr));