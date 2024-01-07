function notes(amount) {
    let note100, note50, note20;
    switch(1)
    {
        case 1:
            note100 = Math.floor(amount / 100);
            amount = amount - note100 * 100;
            console.log("Notes of hundread is ", note100);
        

        case 2:
            note50 = Math.floor(amount / 50);
            amount = amount - note50 * 50;
            console.log("Notes of fifty is ", note50);


        case 3: 
            note20 = Math.floor(amount / 20)
            amount = amount - note20 * 20;
            console.log("Notes of twenty is ", note20);
            break;
         
    }
}
console.log(notes(1295));