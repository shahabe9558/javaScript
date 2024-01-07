let reverse = (n) => {
    let ans = 0;
    while(n)
    {
        let digit = n % 10;
        ans = (ans * 10) + digit;
        n = Math.floor(n / 10);
    }
    return ans;
}
console.log(reverse(34));



// let reverse = (n) =>{
//     let ans = "";
//     console.log(ans.length);
//     while(n)
//     {
//         let digit = n % 10;
//         ans += digit;
//         n = Math.floor(n / 10);
//     }
//     console.log(ans);
// }
// reverse(546);