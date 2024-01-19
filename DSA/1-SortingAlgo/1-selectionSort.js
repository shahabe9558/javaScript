
// TC = O(n^2) for best O(n)
// if array is short then use selectionSort
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i<n-1; i++)
    {
        for(let j = i+1; j<n; j++){
            if(arr[i] > arr[j])
            {
                swap(arr, i, j);
            }
        }
        console.log(arr);
    }
}
const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);