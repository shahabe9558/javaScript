// primitive => String, bool, number, undefine, null
// refernece => objects, function, arrarys

// function testing(a){
//     a = a + 2;
// }
// let a = 3; 

// objects ke liye 
// testing(a);
// console.log(a);
// function testing(obj)
// {
//     obj.value++
// }

// let obj = {
//    value : 10
// }


// for array 

// testing(obj);
// console.log(obj.value);
// function testing(arr)
// {
//     arr[0] = 199;
// }
// var arr = [1,2,3,4,5];
// testing(arr);
// console.log(arr[0]);

function passingFun(testing)
{
    testing.a = 19;
}

function testing(){
    a = 5;
}
passingFun(testing);
console.log(testing.a);
