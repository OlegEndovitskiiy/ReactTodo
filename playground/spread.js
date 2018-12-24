// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 3));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
// console.log(final);

var person = ['Oleg', 27];
var personTwo = ['Jen', 29];
var personThree = ['Boris', 38];

var greeting = function(name, age) {
    console.log(`Hi ${name}, you are ${age}`);
}

greeting(...person);
greeting(...personTwo);
greeting(...personThree);

var names = ['Mike', 'Ben'];
var final = [...names, 'Oleg'];
final.forEach((name) => {
    console.log(`Hi ${name}`);
});