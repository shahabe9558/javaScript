// getter is use to change the property using get fucntion 
// setter is used to set the property using set function 


// example of get 
const ob = {
    name: "alam",
    roll : 34,
    get name1(){
        return this.name;
    }
}
console.log(ob.name1);


// example of set 
// const ob = {
//     name: "",
//     roll : 34,
//     set setName(value){
//         this.name = value;
//     }
// }
// ob.setName = "Shahabenawaz Alam";
// console.log(ob.name);