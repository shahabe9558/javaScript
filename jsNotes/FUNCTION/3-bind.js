let person = {
    fName : "Shahabe",
    lName : "Alam",
    display : function (){
        console.log(this.fName + " " + this.lName);
    }
}
// this problem solve by the bind method
// setTimeout(person.display, 2000);

let dis = person.display.bind(person);
setTimeout(dis, 3000);