
const myFunc = (total, num, index)=>{
    // toatal represent at o index 
    // num represent at 1 index 
    console.log("total is ", total);
    console.log("Num is ", num);
    console.log("Cuur index  is ", index);
    return total + num;
}


// by default index ki value 1 hoti hai 
// 0 initial value bhjne par index ki value 0 ho jaati hai 
const arr = [1,2,3,4,5];
console.log(arr.reduce(myFunc, 0));


