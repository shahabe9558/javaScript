
function isPalindrome(arr, s, e)
{
    if(s > e)
    return true;
    
    if(arr[s] == arr[e])
    {
        s++;
        e--;
        return isPalindrome(arr, s, e);
    }
    else{
         return false;
    }
}

const str = "abbaa";
let arr = str.slice('');
console.log(isPalindrome(str, s = 0, e = arr.length-1));