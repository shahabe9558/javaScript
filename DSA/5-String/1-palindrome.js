function isPalindrome(str)
{
    let revStr = str.split('').reverse().join('');
    if(revStr === str)
    {
        return true;
    }
    else {
        return false;
    }
}
let str = "cafmfdfdmfac";
console.log(isPalindrome(str));



/*
// method -1 
function isPalindrome(str){
    let arr = str.split('');
    let s = 0;
    let e = arr.length-1;
    console.log(e);
    while(s <= e)
    {
        if(arr[s++] != arr[e--])
        {
            return "No";
        }
    }
    return "Yes";
}
let str = "cafmmfac";
let ans = isPalindrome(str);
console.log(ans);
*/