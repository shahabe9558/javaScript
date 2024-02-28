// const fruits = new Map([
//     ["apple", 300],
//     ["mango", 200],
//     ["banana", 100],
//     ["orange", 300]
// ]);
// fruits.set("kiwi", 130);
// fruits.set('straberry', 123);
// fruits.delete('orange');
// console.log(fruits.size);
// console.log(fruits.has("orange"));
// console.log(fruits.get("mango"));
// console.log(fruits);


// for each method in map 
// const fruits = new Map([
//         ["apple", 300],
//         ["mango", 200],
//        ["banana", 100],
//         ["orange", 300]
//     ]); 
// fruits.forEach(myfun);
// function myfun(value, index, fruits){
//     fruits[index] = value + 10;
// }
// console.log(fruits);

// iterator basic in map 

const fruits = new Map([
    ["apple", 300],
    ["mango", 200],
   ["banana", 100],
    ["orange", 300]
]); 

for(const x of fruits.entries()){
    console.log(x);
}