let val;

// Number -> String 
val = 5;
console.log(val);
console.log(typeof val); //returns number 
console.log(val.length); //returns undefined 
//due to length is a string method 

val = String(5); //typecast
console.log(val); 
console.log(typeof val); //returns string
console.log(val.length); //returns 1

val = true; 
console.log(val);
console.log(typeof val); 

val = String(true);  //Bool -> String
console.log(val); 
console.log(typeof val); 
console.log(val.length); 

val = true; 
console.log(val);
console.log(typeof val); 

val = String(true);  //Bool -> String
console.log(val); 
console.log(typeof val); 
console.log(val.length); 

val =  new Date(); 
console.log(val);
console.log(typeof val); 

val = String(new Date()); //Object Literal -> String
console.log(val); 
console.log(typeof val); 
console.log(val.length); 

val = [1,2,3,4,5] 
console.log(val);
console.log(typeof val); 

val = String([1,2,3,4,5]);  //Array -> String
console.log(val); 
console.log(typeof val); 
console.log(val.length); 

//toString() method

val = (5).toString();
val = (true).toString();

// string -> number

val = '5';
console.log(typeof val);
//console.log(val.toFixed());

val = Number('5'); //returns 5
console.log(typeof val)
console.log(val.toFixed());

val = Number(true); //returns 1
console.log(val);
val = Number(false); //returns 0
console.log(val);
val = Number(null); //returns 0
console.log(val);
val = Number('hello'); //returns NaN (Not a Number)
console.log(val);
val = Number([1,2,3,4,4,5]); //returns NaN
console.log(val)

// parseInt() and parseFloat()

val = parseInt('100');
console.log(val)
vval = parseInt('100.30031');
console.log(val)


val = parseFloat('100');
console.log(val)
vval = parseFloat('100.30031');
console.log(val)
console.log(val.toFixed(2));

const value1 = 5;
const value2 = 6;

const sum = value1 + value2;
console.log(sum);
console.log(typeof sum); 

//type cohersion 

const value3 = String(5);
const value4 = 6;
const sum1 = value3 + value4;
console.log(sum1);
console.log(typeof sum1); 

const value5 = String(5);
const value6 = 6;
const sum2 = Number(value5 + value6);
console.log(sum2);
console.log(typeof sum2); 





