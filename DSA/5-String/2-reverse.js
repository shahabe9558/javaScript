
function swap(arr, s, e)
{
  let temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
  return arr;
}

function reverse(str)
{
  let arr = str.split('');
  let s = 0; 
  let e  = arr.length -1;
  while(s < e)
  {
    swap(arr, s, e);
    s++;
    e--;
  }
  return arr.join('');
}

let str = "amir";
console.log(reverse(str));




// function reverse(str)
// {
//   let str3 =   str.split('').reverse().join('');
//   return str3;
// }
// let str = "alam";
// console.log(str);
// console.log(reverse(str));

