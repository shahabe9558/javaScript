const countDigit = (n) =>{
    let cnt = 0;
    while(n != 0)
    {
        n = Math.floor(n / 10);
        cnt++;
    }
    return cnt;
}
console.log(countDigit(354343));