let totalsetBits = (n) =>{
    let binaryNum = 0;
    let i = 0;
    while(n != 0)
    {
        let lastBit = n & 1;
        binaryNum = (lastBit  * Math.pow(10, i) + binaryNum);
        n = n >> 1;
        i++;
    }
    let cnt = 0;
    while(binaryNum)
    {
        let digit = binaryNum % 10;
        if(digit == 1)
        {
            cnt++;
        }
        binaryNum = Math.floor(binaryNum / 10);
    }
    return cnt;
}
console.log(totalsetBits(12));