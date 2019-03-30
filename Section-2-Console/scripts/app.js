alert('hello world')

//logging to the console

console.log('Hello World');
console.log(1234);
console.log(true);

var greeting = 'Hello';
console.log(greeting);

console.log([1,3,4,5,]);
console.log({a:1,b:2});
console.error('This is an error');
console.clear();
console.warn('this is a warning');
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');

//Primitive Types

const name = 'John Doe'; //String
console.log(typeof name);
const age = 45; //Number
console.log(typeof age); 
const hasKids = true;  //Bool
console.log(typeof hasKids); 
const car = null; //Null
console.log(typeof car); 
let test; //Undefined
console.log(typeof test); 
const sym = Symbol(); //Symbol
console.log(typeof sym); 

//Refernce Types 
const hobbies = ['movies','music','runescape']; //Array
console.log(typeof hobbies);

const address = { //Object Literal 
    city: 'Boston',
    state: 'Ma'
}
console.log(typeof address);
const today = new Date();
console.log(today);
console.log(typeof today);