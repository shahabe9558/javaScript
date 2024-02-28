class Queue{
    constructor(size){
       this.size = size;
       this.front = 0;
       this.rear = 0;
       this.arr = new Array(size);
    }
    enqueue(num){
        if(this.rear == this.size){
            console.log("Queue is full");
        }else{
            this.arr[this.rear] = num;
            this.rear++;
        }
    }
    dequeue(){
        if(this.rear == 0)
        {
            console.log("Queue is empty");
        }else{
            this.arr.shift(); 
            this.rear--; 
        }
    }
    frontElement(){
        return this.arr[this.front];
    }
    isEmpty(){
        if(this.front == this.rear)
        {
            return true;
        }else{
            return false;
        }
    }
}
let q = new Queue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
console.log(q.arr);

