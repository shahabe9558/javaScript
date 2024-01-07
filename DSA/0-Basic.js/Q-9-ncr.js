const factorial = (n)=>{
    let fact = 1;
    while(n)
    {
        fact *= n;
        n--;
    }
    return fact;
}

let ncr = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n -r));
}

console.log(ncr(5,2));
