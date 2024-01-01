function testFunc(value, index, arr)
{
    console.log("Value is poiting to =", value);
    console.log("Index is poiting to =", index);
    console.log("Array is poiting to =", arr);
    return value > 34;
}
const arr = [12, 14,20, 40, 1];
console.log(arr.some(testFunc));