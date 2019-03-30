//function declarations

function greet(firstName = 'John', lastName = 'Doe'){ //defualts
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());
console.log(greet('Steve','Smith'));

const square = function(x = 3){ //defaults
    return x*x;
}

console.log(square());
console.log(square(8));

//immediately invokable function expressions - IIFE

(function(){
    console.log('IFFE Ran..')
})();

(function(name){
    console.log('Hello ' + name)
})('Bard');

const todo = { //object literal with functions
    add: function(){
        console.log('Add to..');
    },
    edit: function(id){
        console.log(`edit to do ${id}`);
    },
    delete: function(id){
        console.log(`delete to do ${id}`)
    }
}

todo.add(); //calling functions in objects
todo.edit(22);
todo.delete(65);