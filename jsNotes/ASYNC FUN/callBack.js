// in javascript function are executed as the are callled not as they are defined 

// function first(){
//     second();
//     console.log("Third fun is called");
// }
// function second(){
//     console.log("Second fun is called");
// }
// first();

// call back function 
function display(sum){
   console.log(sum);
}
function calculate(a, b, display){
    let sum = a + b;
    display(sum);
}
calculate(5, 5, display);
