

// Note => JavaScript does not support associative array 
// {
//     Associative Arrays =>
//     Many programming languages support arrays with named indexes.
//     Arrays with named indexes are called associative arrays (or hashes).
//     JavaScript does not support arrays with named indexes.
//     In JavaScript, arrays always use numbered indexes.
// }
// Array method and property will produce incoreect result 
const arr = [];
arr["firstName"] = "Shahabe";
arr["lastName"] = "Alam";
arr["Age"] = 24;
console.log(arr.length);
console.log(arr[0]);