// for in loop for objects
// let Human = {
//     eye:2, 
//     hand:2, 
//     hair:"Infinite"
// }


// for(let key of Object.entries(Human))
// { 
//     console.log(key, ":" , Human[key]);
// }
// for(let key in Human)
// {
//     console.log(key, ":" , Human[key]);
// }

// index print karega
// let arr = [1,2,3,4,5];
// for(let key in arr)
// {
//     console.log(arr[key]);  // value print karega
//     // console.log(key); // index print kararanna hai 
// }


// only for iterable keliye lagega
// let arr2 = [1,2,3,4,9];
// for(let key of arr2)
// {
//     console.log(key);
// }


// object me property check karne ke liye if in ka use kar sakte ho 

let obj = {
    value : 2, 
    name : "Samla", 
    add : "Vimla pur bhadohi uttar pradesh aurai bhadohi mirzapur"
}

if("add" in obj)
{
    console.log("Following property maujood hai isme");
}
else{
    console.log("Following property maujood nahi hai isme");
}