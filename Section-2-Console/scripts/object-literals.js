const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'SteveS@aol.com',
    hobbies: ['msuic','sports','videogames'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;

val = person; //get objects
val = console.log(val);

val = person.firstName; //specific value 
console.log(val);

val = person['firstName'];
console.log(val);

val = person.firstName + ' ' + person.lastName; //adding values
console.log(val);

val = person.hobbies[2];
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val)

const people = [ //array of people
    {name: 'John', age: 36},
    {name: 'Mike', age: 56},
    {name: 'Lucy', age: 21},
    {name: 'Mike', age: 27},
    {name: 'Nancy', age: 34},
];

console.log(people);

for(let i =0; i < people.length; i++){ //iterate through all values in people
    console.log(people[i]);
}