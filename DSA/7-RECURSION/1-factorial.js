function factorial(n){
    // base case check karo 
    console.log(n);
    if(n == 0)  
    {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));