// optimal appraoch 
const isPrime2 = (n) => {
   for(let i = 2; i<=Math.sqrt(n); i++)
   {
     if(n % i == 0)
     {
        return false;
     }
   }
   return true;
}
console.log(isPrime2(4));






// time complexity is onabort(n)
const isPrime = function(n){
   for(let i = 2; i<n; i++)
   {
    if(n % i == 0)
        {
            return false;
        }
   }
   return true;
}
// console.log(isPrime(11));