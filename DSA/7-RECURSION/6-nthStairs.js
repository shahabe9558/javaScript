
const reachNthStairs = (n) => {
    // base case 
    // person is at basement stairs 
    if(n < 0)
    {
        return 0;
    }
    if(n == 0)
    {
        return 1;
    }
    return reachNthStairs(n -1) + reachNthStairs(n -2);
}
console.log(reachNthStairs(4));