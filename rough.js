var obj = {
  firstName : "Alam",
  lasrName : "Shahabe",
  fullName : function (){
    console.log(`The full name is ${this.firstName} ${this.lasrName}`);
    console.log(this);
  }
}

let display = obj.fullName.bind(obj);
setTimeout(display, 2000);
