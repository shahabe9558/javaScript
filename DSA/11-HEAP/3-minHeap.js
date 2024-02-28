// following 0 based indexing 
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapify(arr, n, i)
{
    let smallest = i;
    let left = 2 * i + 1;
    let  right = 2 * i + 2;
    if(left < n && arr[smallest] > arr[left]){
        smallest = left;
    }
    if(right < n && arr[smallest] > arr[right])
    {
        smallest = right;
    }
    if(smallest != i)
    {
        swap(arr, smallest, i);
        heapify(arr, n, smallest);
    }
}
const arr =[51, 54, 53, 55, 52, 50];
let n = arr.length;
for(let i = Math.floor(n/2); i >=0; i--)
{
    heapify(arr, n, i);
}
console.log(arr);