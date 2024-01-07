const sum = (n) =>{
    var ans = 0;
    while(n != 0)
    {
        let digit = n % 10;
        ans += digit;
        n = Math.floor(n / 10);
    }
    return ans;
}
console.log(sum(54));


const priduct = (n) =>{
    let ans = 1;
    while(n != 0)
    {
      let digit = n % 10;
      ans *= digit;
      n = Math.floor(n / 10);
    }
    return ans;
}
console.log(priduct(54));