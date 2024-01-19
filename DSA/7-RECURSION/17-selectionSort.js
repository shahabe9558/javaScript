function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function selectionSort(arr, index = 0)
{
    // base case 
    if(index == arr.length-1)
    {
        return;
    }
    // solve case 1 
    for(let i = index + 1; i<arr.length; i++)
    {
        if(arr[index] > arr[i]){
            swap(arr, index, i);
        }
    }
    console.log(arr);
    selectionSort(arr, index + 1);
    return arr;

}

const arr = [50, 40, 30, 20, 10];
console.log(selectionSort(arr));