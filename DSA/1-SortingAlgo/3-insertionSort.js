const insertionSort = (arr)=>{
    let n = arr.length;
    // round darsa raha hai 
    for(let i = 1; i<n; i++){
        let temp = arr[i];
        let j = i -1;
        for(; j>=0; j--){
            // consdtion to check number is greter or not 
            if(arr[j] > temp)
            {
                // shift kar do saare element ko 
                arr[j + 1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j + 1] = temp;
    }
}
const arr = [10,1,7,4,8,2,11];
insertionSort(arr);
console.log(arr);
