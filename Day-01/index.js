"use strict";

// ============================================
// Code Starts Here
// ============================================

// 🌟 Intro to variables

//  1.) Variables can store some information.
//  2.) We can use that information later.
//  3.) We can change that information later.

// 🔜 Declare a variable:--

// var firstName = "Ritik";

// Use variable info
// console.log(firstName); // Result:- Ritik

// Change variable info
// firstName = "Deepak";
// console.log(firstName); // Result:- Deepak

// 🌟 Rules for naming variables

//  1.) You can not start with numbers.
//  2.) You can use only underscore _ or dollar symbol.
//  3.) You can not use spaces.
//  3.) Start with small letter and use camelCase.

// Examples:---------------------

// 1.)

// 1value (Invalid)
// value1 (Valid)

// 2.)
// var first_name = "Ritik";
// console.log(first_name);
// ======================================
// var _firstname = "Ritik";
// console.log(_firstname);
// ======================================
// var $firstName = "Ritik";
// console.log($firstName);

// 🌟 Let's know about let keyword

// The main difference between var and let in JavaScript is their scope:

// var has function-level scope, meaning it is accessible throughout the entire function in which it is declared, regardless of block scope.

// let has block-level scope, meaning it is only accessible within the block in which it is declared.

// 🔜 Declare variable with let :--

// Using Var
// var firstName = "Ritik";
// var firstName = "Ritik"; // Redeclare multiple times with same value
// console.log(firstName);

// Using Let (ES-2015)

// let firstName = "Ritik";
// let firstName = "Ritik"; //Can't be re declared throw error but re-assigned.
// console.log(firstName);

// 🌟 Declare constant

// 🌟 Let's know about const keyword
// The main difference between const and let in JavaScript
//  is that const is used for declaring variables whose values
//  cannot be reassigned or re-declared, while let is used for declaring
//  variables whose values can be reassigned but not re-declared.

// Declare a variable using const
// const greeting = "Hello, world!";
// console.log(greeting); // Output: "Hello, world!"

//  Attempt to reassign greeting - this will throw an error!
// greeting = "Goodbye, world!"; // TypeError: Assignment to constant variable.

// Declare a variable using let
// let count = 0;
// console.log(count); // Output: 0

//  Reassign the value of count
// count = 1;
// console.log(count); // Output: 1

//  Attempt to redeclare count - this will throw an error!
// let count = 2; // SyntaxError: Identifier 'count' has already been declared.

// ============================================
// Code Ends Here
// ============================================
