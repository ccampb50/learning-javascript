const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Craig';
const tags = 'webdev, web, runescape, hello_world';
let val;

val = firstName + lastName;
console.log(val);

val = firstName + ' ' + lastName;
console.log(val);

val = 'Brad';
console.log(val);
val += 'Traversy'
console.log(val);

val = 'Hello my name is ' + firstName + ' and I am ' + age + ' years old';
console.log(val);

//escape characters;

console.log("That's awesome I can't wait");
console.log('That\'s awesome I can\'t wait');
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ', lastName);
console.log(val);

//changecase()
val = firstName.toLocaleUpperCase();
console.log(firstName);
val = lastName.toLocaleUpperCase();
console.log(val);

//indexing strings
val = firstName[2];
console.log(val);

val = firstName.indexOf(1);
console.log(val);

val = firstName.lastIndexOf(1);
console.log(val);

val = firstName.charAt(2);
console.log(val);

val = firstName.charAt(firstName.length - 1);
console.log(val);

//substrings

val = firstName.substring(0,4);
console.log(val);

val = firstName.slice(0,4);
console.log(val);

val = firstName.slice(-3);
console.log(val);

val = str.split(' ');
console.log(val);
 
val = tags.split(',');
console.log(val);

console.log(str);
val = str.replace('Craig','Taylor');
console.log(val);

val = str.includes('Hello');
console.log(val);

