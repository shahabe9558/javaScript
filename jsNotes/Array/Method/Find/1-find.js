function myFun(value, index, arr)
{
    return value > 18;
}

// return the first vlaue if test case pass 
const lover = [12,,13,14, 22,,33,34];
const result = lover.find(myFun);
console.log(result);