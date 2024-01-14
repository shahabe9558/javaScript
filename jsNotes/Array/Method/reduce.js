
// reduce function on objeccts  
const employee = [
    {
        Name: "A",
        Age : 25,
        Salary: 200,
    },
    {
        Name: "B",
        Age : 29,
        Salary: 500,
    },
]
function myFunc(total, num, index)
{
    return total.Name + num.Name;
}
// console.log(employee[0].Salary + employee[1].Salary);
console.log(employee.reduce(myFunc));


// reduce function on array 

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


