
function binarySearch(arr, key, s, e) 
{
//    base case 
   if(s > e){
    return false;
   } 
   let mid = Math.floor((s + e)/2);
    if(arr[mid] == key){
        return true;
    }
    if(arr[mid] > key)
    {
        return binarySearch(arr, key, s, mid-1)
    }
    else{
        return binarySearch(arr, key, mid + 1, e);
    }
}
const arr = [1,2,3,4,5];
console.log(binarySearch(arr, 6, s = 0, e = arr.length-1));