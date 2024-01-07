function swap(arr[i], arr[j])
{
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
const arr = [12,11,10,8,9];
swap(arr[0], arr[1]);
console.log(arr);
