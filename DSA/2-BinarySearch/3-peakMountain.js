
function peakIndex(arr){
    let s =0; 
    let e = arr.length -1;
    let mid = Math.floor((s + e)/2);
    while(s < e)
    {
        if(arr[mid] < arr[mid + 1])
        {
            s = mid + 1;
        }else {
            e = mid;
        }
        mid = Math.floor((s + e)/2);
    }
    return s;
}
// time complexity depends on size of Array
// method 2 
function peak(arr){
    let maxElement = Math.max.apply(0, arr);
    let index = arr.indexOf(maxElement);
    return index;
}

const arr = [1,2,3,4];
console.log(peakIndex(arr));
console.log(peak(arr));