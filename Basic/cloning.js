// Note-> garbage colltion 
// it deallocates automatically we have no controal over garbage collection when to stop or start it run in background



// it can be done by the following way
// 3-rest operator
// let src = {
//     value : 10,
//     name : "Alam"

// }
// let  dest = {...src};
// console.log(dest.name);
// console.log(dest.value);




// 2-assign
// var src = {
//    value : 20,
//    name : "Alam"
// };
// let dest = Object.assign({}, src);
// console.log(dest.value);
// console.log(dest.name);


// 1-iteration
// var src = {
//     value : 10,
//     name: "Shahabenawaz Alam"
// };



// var des = {};

// for(let key in src)
// {
//     des[key] = src[key];
//     console.log(key, des[key]);
// }