function swap(arr, s, e)
{
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
}
function bubbleSort(arr, index = 0)
{
    // base case 
    if(index == arr.length-1){
        return;
    }
    for(let i = 0; i<arr.length-1; i++)
    {
        if(arr[i] > arr[i + 1])
        {
            swap(arr, i, i+1);
        }
    }
    console.log(arr);
    bubbleSort(arr, index + 1);
    return arr;
}

const arr = [50, 40, 30, 20,10];
console.log(bubbleSort(arr));