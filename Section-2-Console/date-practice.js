let val;

const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');
val = today
console.log(val);
console.log(typeof val);

val = today.toString();
console.log(typeof val);

val = birthday;
console.log(val);

val = today.getMonth(); // 0 based
console.log(val);

const currentMonth = today.getMonth + 1;
console.log(currentMonth);

val = today.getDate(); //some usefule methods getters
console.log(val);
val = today.getDay();
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getMinutes();
console.log(val);
val = today.getSeconds();
console.log(val);
val = today.getMilliseconds();
console.log(val);
val = today.getTime();
console.log(val);

//setters

birthday.setMonth(2);
console.log(birthday);
birthday.setDate(12);
console.log(birthday);
birthday.setFullYear(1982);
console.log(birthday);
birthday.setHours(3);
console.log(birthday);
birthday.setMinutes(30);
console.log(birthday);
birthday.setSeconds(24);
console.log(birthday);