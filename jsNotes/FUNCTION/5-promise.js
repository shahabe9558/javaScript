

// await syntax for async

async function myFun(){
    let  myP = new Promise(function(resolve){
        setTimeout(function(){
            console.log("Inside the funtion");
        }, 3000)
    }) 
    let result = await myP;
}


console.log(myFun());
console.log("Next Line executed");




// function myfun(){
//     return Promise.resolve()
// }

// async function myfun(){
//     return "Hello";
// }
// console.log(myfun());



// example using callback 


// setTimeout(myFun, 3000);
// function myFun(){
//     console.log("I love You");
// }

// example using promise 
// let myP = new Promise(function(resolve, reject){
//    setTimeout(resolve("I love You"), 3000);
// });
// myP.then(
//     function(value){
//         console.log(value);
//     }
// )





// general syntax of promise 
// function myDisplay(value){
//     console.log(value);
// }
// let myPromise = new Promise(function(resolve, reject){
//   let x = 3;
//   if(x == 0)
//   {
//     resolve("Ok");
//   }
//   else{
//     reject("Not ok");
//   }
// });

// myPromise.then(
//     function(value){
//         myDisplay(value);
//     },
//     function(error){
//         myDisplay(error);
//     }
// );
