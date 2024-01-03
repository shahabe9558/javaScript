// creating a map 
// passsig an array to new Map()
// value can be same but key always be uniwue 
// key can be any data type but in objects keys can be only string and symbol  
// map store data as inserted 

// const map = new Map([
//     ["b", 2],
//     ["c", 3],
//     ["d", 4],
//     ["d", 4],
//     ["a", 1],
//     ["n", 1],
// ]);
// console.log(map);

// using set method we can update and change the key value 
// usin get method we can access the map 
// size property return num of element in map 
// delete method delete the key in map and return true if presnet else false
// has method return true if prensent  else false
const map2 = new Map();
map2.set("mango", 500);
map2.set("apple", 600);
map2.set("banana", 100);
console.log(map2);
map2.set("mango", 1000);
console.log(map2);
console.log(map2.get("apple"));
console.log(map2.size);
console.log(map2.delete("mango"));
console.log(map2.delete("bnanfjd"));
// console.log(map2);
// console.log(map2.has("mango"));