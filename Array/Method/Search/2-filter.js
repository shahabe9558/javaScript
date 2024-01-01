function myFun(value, index, arr)
{
    return value > 18;
}

const adult = [12, 22,33,44,77, 14];
const result = adult.filter(myFun);
console.log(result);