class List{
    constructor(data)
    {
        this.head = {
            value : data,
            next : null,
            prev : null,
        }
        this.tail = this.head;

    }
    insertAtHead(data){
        let newNode = {
            value : data,
            next : null,
            prev : null,
        }
        newNode.next = this.head;
        this.head.prev = newNode.next;
        this.head = newNode;
    }
    insertAtTail(data){
        let newNode = {
            value: data,
            next: null,
            prev : null,
        }
        this.tail.next = newNode;
        newNode.prev = this.tail.next;
        this.tail = newNode;
    }
    insertAtPosition(data, position){
        if(position == 1)
        {
            this.insertAtHead(data);
            return;
        }
        let temp = this.head;
        let cnt = 1;
        while(cnt < position -1)
        {
            temp = temp.next;
            cnt++;
        }
        // if postion is last 
        if(temp.next == null)
        {
            this.insertAtTail(data);
            return;
        }
        // if position
        let newNode ={
            value: data,
            next : null,
            prev : null,
        }
        newNode.next = temp.next;
        temp.next.prev = newNode.next;
        temp.next = newNode;
        newNode.prev = temp;
    }
    deleteNode(position)
    {
        let curr = this.head;
        let back = null;
        let cnt = 1;
        while(cnt < position)
        {
            back = curr;
            curr = curr.next;
            cnt++;
        }
        if(position == 1)
        {
            let temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;
            temp = undefined;
        }
        if(position == 4)
        {
            this.tail = back;
            back.next.prev = null;
            back.next = null;
            curr = null;
        }
        else{
            back.next =curr.next;
            curr.next.prev = back.next;
            curr.next = null;
            curr.prev = null;
            curr = undefined;
        }
    }
    print()
    {
        let temp = this.head
        while(temp != null)
        {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}
let list = new List(10);
list.insertAtHead(8);
list.insertAtTail(12);
list.insertAtPosition(11, 3);
list.deleteNode(3);
list.print();
console.log("Head is ", list.head);
console.log("Tail is ", list.tail);

