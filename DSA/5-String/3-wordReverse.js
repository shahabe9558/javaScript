function wordReverse(s)
{
    let arr = s.split(' ').reverse().join(' ');
    return arr;
}
let s = "My name is khan";
let rw = wordReverse(s);
console.log(rw);