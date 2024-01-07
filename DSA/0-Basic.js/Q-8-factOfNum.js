const factOfNum = (n)=>{
    let fact = 1;
    while(n)
    {
        fact *= n;
        n--;
    }
    return fact;
}
console.log(factOfNum(21));