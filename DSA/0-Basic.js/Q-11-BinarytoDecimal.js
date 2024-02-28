
// appraoch two 
let binaryTODecimal = (n) => {
    let ans = "";
    while(n != 0)
    {
        let digit = n % 2;
        ans = ans + digit;
        n = Math.floor(n / 2);
    }
    let result = ans.split("");
    let r = result.reverse();
    ans =  r.join("");
    return ans;
    


}
console.log(binaryTODecimal(5));




// approach one 
// let binaryToDecimal = (n)=> {
//     let i =0;
//     let ans =0;
//     while(n != 0)
//     {
//         let lastBit = n & 1;
//         ans = (lastBit * Math.pow(10, i) + ans);
//         n = n >> 1;
//         i++;
//     }
//     return ans;
// }
// console.log(binaryToDecimal(12));