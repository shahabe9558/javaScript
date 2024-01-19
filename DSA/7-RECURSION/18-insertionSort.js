
function insertionSort(arr, index = 1)
{
    // base case 
    if(index == arr.length)
    {
       return; 
    }
    // solve 1 case 
    let temp = arr[index];
    let i = index -1
    for(; i>=0; i--)
    {
        if(arr[i] > temp)
        {
            arr[i + 1] = arr[i];
        }
    }
    arr[i + 1] = temp;
    console.log(arr);
    insertionSort(arr, index + 1);
    return arr;

}


const arr = [50, 40,30,20,10];
console.log(insertionSort(arr));