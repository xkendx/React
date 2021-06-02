// var, let, const
// var ==> pure javascript
// file based
// JS is not a type safe language
// object notations

// var number = 7;
// let number2 = 35;
// number2 = 28;

// let students = { id: 1, name: 'Kenan' };

// console.log('number is ' + number);
// console.log('number is ' + number2);
// console.log(students);

// function save(student, note = 100) {
//     console.log(student.name + ': ' + note);
//     // console.log('Saved');
// }

// function save2(note = 100, student) {
//     console.log(student.name + ': ' + note);
//     // console.log('Saved');
// }
// save(students, 55);
// save2(undefined, students); // default use
// // save(15);

// let newArrays = ['Kenan', 'Ayşegül'];
// console.log(newArrays);

// let newArrays2 = [newArrays, students, 'İstanbul', { city: 'Samsun' }];
// console.log(newArrays2);

//! REST (send parameter array)
// C# -- params
// Java -- varArgs
// let showProducts = function (id, ...products) {
//     console.log(id);
//     console.log(products);
// };

//console.log(typeof showProducts); // function

// showProducts(7, 'apple', 'peach', 'banana'); // rest parameters

//! SPREAD (spread array)
// let points = [5, 25, 66, 78, 11];
//console.log(Math.max(5, 25, 66, 78, 11));  //
// console.log(Math.max(...points)); // spread

//console.log(...'ABC', 'D', ...'EFG', 'H'); // SPREAD chars A B C D E F G H

//! DESTRUCTURING (ASSIGN to VARIABLE from ARRAY)
let populations = [10000, 20000, 30000, [40000, 50000]];
let [small, medium, high, [veryHigh, maximum]] = populations;
// console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryHigh);
// console.log(maximum);

function someFunction([small1], number) {
    // destructuring
    // console.log(small1);
    // console.log(number);
}

// someFunction(populations, 7);
someFunction(populations); // ..., undefined

let category = { id: 1, name: 'drinks' };
// console.log(category.id);
// console.log(category.name);
// console.log(category['name']);

let { id, name } = category;
// console.log(id);
// console.log(name);
