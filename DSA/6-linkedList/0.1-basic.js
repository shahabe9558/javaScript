class List {
    constructor(data)
    {
        this.head = {
            value:data,
            next :null,
        };
        this.tail = this.head;
    }
    insertNode(nodeData){
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
let list = new List(10);
list.insertNode(12);
console.log(list.head);
console.log(list.head.next);
console.log(list.tail);