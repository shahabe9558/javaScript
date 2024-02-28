class Stack{
    constructor(size)
    {
        this.size = size;
        this.top = -1;
        this.arr = new Array(size);
    }
    push(value){
        if(this.size - this.top > 1)
        {
            this.top++;
            this.arr[this.top] = value;
        }else{
            console.log("Stack is full");
        }
    }
    pop(){
        if(this.top < 0)
        {
            console.log("Stack is empty");
        }
        else{
            // this.arr[this.top] = undefined;
            this.top--;
            this.size--;
            this.arr.length = this.size;
        }
    }
    peak(){
        return this.arr[this.top];
    }
    isEmpty(){
        if(this.size == 0)
        {
            return true;
        }else{
            return false;
        }
    }

}
let s = new Stack(5);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.pop();
s.pop();
s.pop();
s.pop();
console.log(s.isEmpty());
console.log(s.peak());
console.log(s.arr);