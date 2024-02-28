function linearSearch(arr, key)
{
    for(let i =0; i < arr.length; i++)
    {
        if(arr[i] == key)
        {
         return "Present";
        }else{
            return "Not Present";
        }
    }
}

const arr = [1,2,3,4,5];
console.log(linearSearch(arr, 1));
