function power(n)
{
    // base case 
    if(n == 0)
    {
        return 1;
    }
    return 2 * power(n -1);
}

console.log(power(5));