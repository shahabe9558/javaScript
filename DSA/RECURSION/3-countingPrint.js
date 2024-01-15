
// head recursion 
// function countPrint(n)
// {
//     // base case 
//     if(n == 0)
//     {
//         return ;
//     }
//     countPrint(n -1);
//     console.log(n);
// }
// countPrint(5);



// tail recurions 
function countPrint(n)
{
    // base case 
    if(n == 0)
    {
        return ;
    }
    console.log(n);
    countPrint(n - 1);
}
countPrint(5);