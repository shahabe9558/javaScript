//  function numberType(num){
//     if(num % 2 == 0)
//     {
//         console.log("Number is Even");
//     }
//     else{
//         console.log("Number is odd");
//     }
//  }
//  numberType(4)
function numEvenOdd(num)
{
    if(num & 1)
    {
        console.log("Num is odd");
    }else{
        console.log("Num is even");
    }
}
numEvenOdd(4);