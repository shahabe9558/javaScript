// function isPalindrome(str)
// {
//     let revStr = str.split('').reverse().join('');
//     if(revStr === str)
//     {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let str = "cafmfdfdmfac";
// console.log(isPalindrome(str));




// method -1 
function isPalindrome(str){
    // let arr = str.split('');
    let s = 0;
    let e = str.length-1;
    while(s <= e)
    {

        if(str.charAt(s++) != str.charAt(e--))
        {
            return "No";
        }
    }
    return "Yes";
}
let str = "cafmfgmfac";
let ans = isPalindrome(str);
console.log(ans);
