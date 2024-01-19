

const sayDigit = (n, arr) =>{
    if(n == 0)
    {
        return ;
    }
    let digit = n % 10;
    n = Math.floor(n / 10);
    sayDigit(n, arr);
    console.log(arr[digit]);
}
const arr = ["Zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
sayDigit(314, arr);