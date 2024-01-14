

function leftMostOccurence(arr, k)
{
    let ans;
    let s = 0;
    let e = arr.length -1;
    let mid = Math.floor((s + e)/2);
    while(s <= e)
    {
      if(arr[mid] == k)
      {
        ans = mid;
        e = mid-1;
      }
      else if(arr[mid] > k)
      {
        e = mid - 1;
      }
      else if(arr[mid] < k)
      {
        s = mid + 1;
      }
      mid = Math.floor((s + e)/2);
    }
    return ans;
}


function rightMostOccurence(arr, k)
{
    let ans;
    let s = 0;
    let e = arr.length -1;
    let mid = Math.floor((s + e)/2);
    while(s <= e)
    {
      if(arr[mid] == k)
      {
        ans = mid;
        s  = mid+1;
      }
      else if(arr[mid] > k)
      {
        e = mid - 1;
      }
      else if(arr[mid] < k)
      {
        s = mid + 1;
      }
      mid = Math.floor((s + e)/2);
    }
    return ans;
}


const arr = [1,2,5,5,5,5,67,123,125];

let arr2 = [];
arr2.push(leftMostOccurence(arr,5));
arr2.push(rightMostOccurence(arr, 5));
console.log("final is ", arr2);
let totalOccurence =  (rightMostOccurence(arr, 5)-leftMostOccurence(arr, 5)) + 1;
console.log(totalOccurence);