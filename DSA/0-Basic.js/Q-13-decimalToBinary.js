function decimalToBinary(DN){
    let ans = 0;
    let i =0;
    while(DN != 0)
    {
      let digit = DN % 10;
      if(digit == 1)
      {
        ans = Math.pow(2, i) + ans;
      }
      i++;
      DN = Math.floor(DN / 10);
    }
    return ans;
}
console.log(decimalToBinary(1100));