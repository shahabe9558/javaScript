// binary tree are those which have <= 2 child 
class Node{
    constructor(value)
    {
        this.value  = value;
        this.left = null;
        this.right = null;

    }
}

class BSTree{
    constructor()
    {
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insertNode(root, newNode){
        if(newNode.left === null)
        {
            if(root.left === null){
                root.left = newNode;
            }else{
                this.insertNode(root.left, newNode);
            }
        }
        
        // agar root ka right null hoga to ye karegaa
        else{
            if(root.right === null)
            {
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
        // if(root.left === null)  
        // {
        //     root.left = newNode;
        // }else{
        //     this.insertNode(root.left, newNode);
        // }
        // if(root.right === null)
        // {
        //     root.right = newNode;
        // }else{
        //     this.insertNode(root.right, newNode);
        // }
    }
    insert(value)
    {
        let newNode = new Node(value);
        if(this.isEmpty())
        {
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

}
let bst = new BSTree();
bst.insert(10);
bst.insert(12);
bst.insert(14);
bst.insert(16);
console.log(bst.root);
console.log(bst.isEmpty());
