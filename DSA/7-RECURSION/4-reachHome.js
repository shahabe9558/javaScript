// recursion me ek case solve karna hota hai baki recursion solve kar dega 

function reacHome(src, des){
    // base case 
    if(src == des)
    {
        console.log("Mai to ghar pahuch gaya");
        return ;
    }
    console.log("source is ", src, " ", "des is ", des);
    src++;
    reacHome(src, des);
}

let src = 1;
let des = 10;
reacHome(src, des);

