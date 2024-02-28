function mergeTwoSortedArray(arr, s, e)
{
    
}

function mergeSort(arr, s, e) 
{
    // base case 
    if(s >= e)
    {
        return;
    }
    let mid = Math.floor((s + e)/2);
    // left part merge
    mergeSort(arr, s, mid);
    // right part merge sorted array lagao 
    mergeSort(arr, mid + 1, e);
    mergeTwoSortedArray(arr, s, e);
    // console.log(arr);
    // return arr;
    
}
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr, s = 0, e = arr.length-1));