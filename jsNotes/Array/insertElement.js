const arr = [1,2,3,4,5];
console.log(arr.length);
arr.push(6);
console.log(arr.length);

// adding element through lenght property 
arr[arr.length] = 7;
console.log(arr.length);
arr[arr.length] = 8;
console.log(arr.length);

// adding Element with high index will create undefined holes 
arr[10] = 10;
console.log(arr.length);
console.log(arr[9]);