let a=3;
let b='3';
let c=a==b;
console.log(a==b); // false, because == does type coercion
console.log(a===b); // false, because === does not do type coercion


let i=11   ;
for (let i=11; i<=20; i++){
if(i%2!=0){
   console.log("ODD numbers between 11 and 20 are: " + i); 
}
else{
   // console.log("odd numbers between 11 and 20 are: " + i);
}
}
