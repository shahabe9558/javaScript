class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertAtHead(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        }   
        let current = this.head;
        newNode.next = current;
        current = newNode;

    }
    print(){
        let current = this.head;
        console.log(current.data);
        current = current.next;
    }
}
let linkObj = new linkedList();
linkObj.insertAtHead(10);
linkObj.insertAtHead(12);
linkObj.print();