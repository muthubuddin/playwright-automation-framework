 class Tester{
  

    constructor( name, year){
        this.name = name;
        this.year = year;
   }

     introduce(){
    return "I am " + this.name + " and I am " + this.year + " years old.";
    
}

 isSenior() {
    return this.year >= 8;
  }
   
 }
const me = new Tester("Mujahid", 9);
console.log(me.introduce());
console.log(me.isSenior());