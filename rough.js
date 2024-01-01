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
    return total + num.Salary;
}
// console.log(employee[0].Salary + employee[1].Salary);
console.log(employee.reduce(myFunc));