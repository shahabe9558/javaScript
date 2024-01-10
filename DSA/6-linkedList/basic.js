class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new node to the end of the linked list
    add(data) {
      const newNode = new Node(data);
  
      // If the linked list is empty, make the new node the head
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
  
        // Traverse the list to find the last node
        while (current.next) {
          current = current.next;
        }
  
        // Assign the new node as the next node of the last node
        current.next = newNode;
      }
  
      // Increment the size of the linked list
      this.size++;
    }
  
    // Display the linked list
    display() {
      let current = this.head;
  
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  
  linkedList.add(10);
  linkedList.add(2);
  linkedList.add(3);
  
  linkedList.display(); // Output: 1, 2, 3