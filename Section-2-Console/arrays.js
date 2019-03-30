const numbers = [43,56,33,23,44,36,5,19,00];
const numbers2 = new Array(22,33,44,66,777,23123,123);
const fruits = ['Apple','Banna','Orange','Pineapple'];
const mixed = [22,'Hello',true,undefined,null,new Date()];
let val;


console.log(numbers);
console.log(numbers2);
console.log(fruits);
console.log(mixed);

val = numbers.length; //array length
console.log(val);

val = Array.isArray(mixed); //array check
console.log(val);

val = numbers[3]; //getting a single value from an array 
console.log(val);

val = numbers[0];
console.log(val);

numbers[2] = 200; //insert value into array 
console.log(numbers);

val = numbers.indexOf(5); //find index of a value in the array
console.log(val);

numbers.push(250); //add to the end
console.log(numbers);

numbers.unshift(13); //add to the beginning.
console.log(numbers);

numbers.pop(); // take from end
console.log(numbers);

numbers.shift(); // take from front
console.log(numbers);

numbers.splice(1,3); //splices array;
console.log(numbers);

val = numbers.concat(numbers2);
console.log(val); //concat arrays

val = fruits.sort();
console.log(val);

val = numbers.sort();
console.log(val);

val = numbers.sort(function(x,y){
    return x-y;
});

console.log(val);

val = numbers.sort(function(x,y){
    return y-x;
});

console.log(val);

function under50(num){
    return num < 50;
}

val = numbers.find(under50); //returns first val under 50 in sorted array


console.log(val);