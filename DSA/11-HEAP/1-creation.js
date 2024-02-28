// heap is  a complete binary tree with following heap order property 
// heap order property means max and min hepa  
// TC O(logn) for insertion and deletion



class Heap{
    constructor()
    {
        this.arr = new Array();
        this.size = this.arr.length;
        this.arr[0] = -1;
    }
    swap(arr, i, j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    insert(value){
       this.size = this.size + 1;
       let index = this.size;
       this.arr[index] = value;
       while(index > 1) 
       {
        let parent = Math.floor(index / 2);
        if(this.arr[parent] < this.arr[index]){
            this.swap(this.arr, parent, index);
            index = parent;
        }else{
            return ;
        }
       }
    }
    deleteFromHeap(){
        if(this.size == 0){
            console.log("Nothing to delete heap is empty");
        }
        this.arr[1] = this.arr[this.size];
        // this.size = this.arr.length - 1;
        // this.arr[this.size] = undefined;

        let index = 1;
        while(index < this.size)
        {
            let leftChild = 2 * index;
            let rightChild = 2 * index + 1;
            if(leftChild < this.size && this.arr[index] < this.arr[leftChild])
            {
                this.swap(this.arr, index, leftChild);
                index = leftChild;
            }
            else if(rightChild < this.size && this.arr[index] < this.arr[rightChild])
            {
                this.swap(this.arr, index, rightChild);
                index = rightChild;
            }else{
                 return;
            }
        }
    }
}
let h1 = new Heap();
h1.insert(60);
h1.insert(50);
h1.insert(40);
h1.insert(30);
h1.insert(20);
h1.insert(55);
h1.insert(80);
h1.deleteFromHeap();
h1.deleteFromHeap();
console.log(h1.arr);