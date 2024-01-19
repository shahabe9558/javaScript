function isSorted(arr, index = 0)
{
    // base case 
    if(index == arr.length -1){
        return true;
    }
    if(arr[index] > arr[index + 1])
    {
        return false;
    }
    return isSorted(arr, index + 1);
}
const arr = [10,20,9,40,50];
console.log(isSorted(arr));