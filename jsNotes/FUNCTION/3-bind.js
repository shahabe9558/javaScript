let person = {
    fName : "Shahabe",
    lName : "Alam",
    display : function (){
        console.log(this.fName + " " + this.lName);
    }
}
// when function is used as callback this is lost 
// this problem solve by the bind method
// setTimeout(person.display, 2000);

let dis = person.display.bind(person);
setTimeout(dis, 3000);