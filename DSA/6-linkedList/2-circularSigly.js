class List {
    constructor(data)
    {
        this.tail = {
            value : data,
            next : null,
        }
        this.tail.next = this.tail;
    }
    insertAtNode(data, element){
            let curr = this.tail;
            // ab element tak pahuchna hai 
            while(curr.value != element)
            {
                curr = curr.next;
            }
            // element mil gaya 
            let newNode = {
                value : data,
                next : null,
            }
            newNode.next = curr.next;
            curr.next = newNode;
            // curr.next = newNode;
            // newNode.next = curr;
            // this.tail = newNode;
    }
    print()
    {
        let temp = this.tail;
        do{
            console.log(temp.value);
            temp = temp.next;
        }while(temp != this.tail);
    }

}
const list = new List(8);
list.insertAtNode(10, 8);
list.insertAtNode(12, 10);
list.insertAtNode(11, 10);
list.print();
console.log(list.tail);
