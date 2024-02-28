// this keyword refers to objects which is pass in call function in this case
// as well as in apply method 
var vehicle ={
    speed : 140,
    method : function (){
      console.log("Runs at speed of", this.speed);
      console.log(this);
    }
  }
  var car = {
    speed : 120,
  }
  vehicle.method.call(car);