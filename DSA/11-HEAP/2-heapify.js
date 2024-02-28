// TC of creating a heap is O(n)
// TC of heapify is O(logn)

function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapify(arr, n, i){
    let largest = i;
    let left = 2 * i;
    let right = 2 * i + 1;
    if(left < n && arr[largest] < arr[left])
    {
        largest = left;
    }
    if(right < n && arr[largest] < arr[right])
    {
        largest = right;
    }
    if(largest != i)
    {
        swap(arr, largest, i);
        heapify(arr, n, largest);
    }
}
function heapSort(arr, n)
{
    let size = n;
    while(size > 1)
    {
        swap(arr, size, 1);
        size--;
    }
    heapify(arr, size, 1);
}
const arr = [-1, 54, 53, 55, 52, 50];
let n = arr.length;
for(let i = Math.floor(n/2); i >0; i--)
{
    heapify(arr, n, i);
}

heapSort(arr, n);
console.log(arr);