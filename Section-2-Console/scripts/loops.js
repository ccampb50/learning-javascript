//for loop

for(let i =0; i < 10; i++ ){ //i = i+1;
    console.log(i);
}

for(let i =0; i < 10; i++ ){ //i = i+1

    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i===5){
        console.log('Stop loop');
        break;
    }
    console.log('Number ' + i);
}

let x = 0;

while( x < 5){
    console.log(x);
    x=x+1;
}

let i = 0;

do{
    console.log('Number ' + i);
    i++;
} while(i <10);


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i=0; i < cars.length; i++){
    console.log(cars[i]);
}

//for each loop
cars.forEach(function(car){
    console.log(car);
});

cars.forEach(function(car, index,array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

//map
const users = [
    {id:1, name:'John'},
    {id:2, name:'Sara'},
    {id:3, name:'Kara'},
    //{id:4, name:'Steve'}
]

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);



const user = {
    firstName : 'John',
    lastName : 'Doe',
    age : 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}