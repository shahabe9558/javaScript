

function isSorted(arr){
    let n = arr.length;
    for(let i =0; i<n-1; i++)
    {
        let j = i + 1;
        if(arr[i] > arr[j]){
            return false;
        }
    }
    return true;

}
const arr = [10, 20, 30, 40, 50];
console.log(isSorted(arr));