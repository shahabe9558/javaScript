
function isPresnet(arr, key, index = 0){
    // base case 
    if(index > arr.length -1)
    {
        return false;
    }
    if(arr[index] == key)
    {
        return true;
    }
    // aage vaale part me check kar lo 
    return isPresnet(arr, key, index + 1);
    
}
const arr = [3,2,5,1,6];
console.log(isPresnet(arr, 5));