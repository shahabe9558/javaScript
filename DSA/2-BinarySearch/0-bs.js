

// it is only used when array is sorted 
const binary_search = (arr, key) => {
     let s = 0;
     let e = arr.length -1;
     let mid = Math.floor((s + e)/2);
     while(s <= e)
     {
        if(arr[mid] == key)
        {
            return mid;
        }
        if(arr[mid] > key)
        {
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }
        mid = Math.floor((s + e)/2);
     }
     return -1;
}
const arr = [1,2,3,4,5];
console.log(binary_search(arr,5));