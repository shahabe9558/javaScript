function squareRoot(num){
    let s = 0; 
    let e = num;
    let ans = -1;
    let mid = Math.floor((s + e)/2);
    while(s <= e)  
    {
        let square = mid * mid;
        if(square == num)
        {
            return mid;
        }
        if(square < num)
        {
            ans = mid;
            s = mid + 1;
        }else
        {
            e = mid - 1;
        }
        mid = Math.floor((s + e)/2);
    }
    return ans;
}
console.log(squareRoot(25));