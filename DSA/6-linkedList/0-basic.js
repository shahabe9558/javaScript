class List {
    constructor(data)
    {
        // initially tail is pointin to head 
        this.head = {
            value: data,
            next : null,
        };
        this.tail = this.head;
    }
    inserAtTail(data)
    {
        let newNode = {
            value : data,
            next : null,
        };
        this.tail.next = newNode;
        this.tail = newNode;

    }
    insertAtHead(data)
    {
        let newNode = {
            value : data,
            next : null,
        };
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtPostion(data, position){
        let newNode = {
            value : data,
            next : null,
        }
        let temp = this.head;

        // position tak pahucho to pahle 
        let cnt = 1;
        while(cnt < position - 1)
        {
            temp = temp.next;
            cnt++;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }
    print(){
        if(this.head === null)
        {
            console.log("list is empty");
        }
        let temp = this.head;
        console.log("temp is ", temp);
        while(temp != null)
        {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
let list = new List(10);
list.inserAtTail(12);
list.insertAtHead(8);
list.insertAtPostion(11, 3);
list.print();
console.log(list.head);
console.log(list.tail);
// console.log(list.head);
// console.log(list.head.value);
// console.log(list.head.next);
