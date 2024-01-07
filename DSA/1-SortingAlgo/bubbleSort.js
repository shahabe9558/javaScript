
// TC = O(n^2) for best case O(n)
function swap(arr, index1, index2)
{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
}
function bubbleSort(arr)
{
    for(let i = 1; i<arr.length; i++)
    {
        for(let j = 0; j< arr.length -1; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                swap(arr, j, j+ 1);
            }
        }
    }
}
const arr = [12, 11, 10, 9,8];
bubbleSort(arr);
console.log(arr);