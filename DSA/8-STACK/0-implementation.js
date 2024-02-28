// using without class 

const data = [];
let size = data.length;
let max = 5;
function push(value){
    if(size < max)
    {
        data[size] = value;
        size++;
    }else{
        console.log("Stack Overflow");
    }
}       
function pop(){
   if(size > 0)
   {
     size--;
     data.length = size;
   }else{
    console.log("Stack is empty");
   }
}
function peak()
{
    return data[size-1];
}
function isEmpty(){
    if(size == 0){
        return true;
    }else{
        return false;
    }
}
push(10);
push(20);
push(30);
push(40);
push(50);
pop();
pop();
pop();
pop();
pop();
push(3);
console.log(isEmpty());
console.log(size);
console.log(peak());
console.log(data);
