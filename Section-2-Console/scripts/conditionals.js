// general logic 
// if (something){
//     do something
// } else{
//     do somthings else;
// }

let id = 100; //equals
let id2 = '100'
if(id== 100){
    console.log('Correct');
}

id = 101;
if(id == 100){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// not equals 

if(id != 101){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

//equal to value and type ===

if(id2 === 101){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(id !== 101){
    console.log('Correct');
} else {
    console.log('Incorrect');
}

if(typeof id !== 'undefined'){ //test type to see if object exists
    console.log(`The ID is ${id}`)
} else {
    ('NO ID')
}

if(id > 200){
    console.log(`ID ${id} is greater than 200`);
} else {
    console.log(`ID ${id} is less than 200`);
}

const color = 'red';

if(color === 'red'){ //if else if else
    console.log('Color is red');
} else if(color === 'blue'){
    console.log('Color is blue')
} else {
    console.log('the color is neither red or blue');
}

//Logical operators

const name = 'steve';
const age = 20;

if (age > 0 && age < 12){ //and (&&) operator
    console.log(`${name} is an child`);
} else if (age >=13 && age < 18){
    console.log(`${name} is an teen`)
} else {
    console.log(`${name} is an adult`);
}

if(age < 16 || age > 65 ){
    console.log(`${name} cannot run in the race`);
} else {
    console.log(`${name} may register for the race`);
}

//ternary operators ? ternary : else

console.log(id===100 ? 'Correct' : 'Incorrect' );

//switchs

switch(color){ //same as line as if statement on line 57
    case 'red': 
        console.log('Color is red');
        break;
    case 'blue': 
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day; 

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);