
function swap(arr, s, e)
{
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
}

function reverse(arr, s = 0, e = arr.length -1)
{
    if(s > e)
    {
        return ;
    }
    swap(arr, s, e);
    s++;
    e--;
    reverse(arr, s, e);
    return arr;
}

const arr = [1,2,3,4,5];
console.log(reverse(arr));