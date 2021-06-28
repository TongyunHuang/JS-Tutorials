/*let js = 'amazing'; // semicolon at the end of each line (ommiting is also fine)
console.log(40 + 8 + 23 - 10);

console.log("Jones");
console.log(23);

// Declaring a variable
let firstName = "Jonas" // "name" is a reserved keyword, so don't name your variable "name"
console.log(firstName)

// symbol allowed in variable name: '_' '$'

*/
////////////////////////12. Data Type/////////////////////////
/**
 * 7 primitive data type
 * 1. Number: Floatin point numbers, used for decimals and integers
 * 2. String
 * 3. Boolean
 * 4. Undefined: Value taken by a variable that is not yet defined('empty value')
 * 5. Null
 * 6. Symbol(ES2015): Value that is unique and cannot be changed
 * 7. BigInt: Larger integers
 * JS has dynamic typing: we don't have to manually define the data type
 */
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // boolean
javascriptIsFun = 'here';
console.log(typeof javascriptIsFun); // String

let year;
console.log(year); // undefined
console.log(typeof year); // undefined

console.log(typeof null); // output object, but should be null, this is a bug in js
*/

////////////////////////13. let,const and var/////////////////////////
/*
let age = 30;
age = 31; // mutable: we can reassign a new value to a variable - we 'mutate' a variable

const birthYear = 1998;
// birthYear = 1998 - error: assignment to constant variable
// const job;  - error : missing intializer in const declaration

var job = 'programmer' // avoid using var
job = 'teacher' // mutable

lastName = 'Huang'
console.log(lastName) // did not use let nor const, but this is not a good idea,
// declare variable whenever possible
*/

////////////////////////14. Basic Operators/////////////////////////
/*
const now = 2021
const ageJonas = now - 1997;
const ageSarah = now - 1990;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3)

const firstName = 'Tongyun'
const lastName = 'Huang'
console.log(firstName + ' ' + lastName)
*/



////////////////////////17. Strings and Template Literals/////////////////////////
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1997;
const year = 2017;

const jonas = "I'm " + firstName + ", a " + job +
    ', ' + (year - birthYear) + ' year old. ';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log('Stirng with \n\
multiple\n\
lines');

console.log(`String
with
multiple lines`)*/

////////////////////////18. Taking Decisions: if/else/////////////////////////
/*const age = 15
const isOldEnough = age >= 18
if (isOldEnough) {
    console.log('driving 🚗')// mac emoji: cmd + crl + space
} else {
    console.log('dont drive💔')
}
*/

////////////////////////20. Type Conversion and Coercion/////////////////////////
/*// type conversion
const inputYear = '1992';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));// NaN: invalid number

// type coercion
let n = '1' + 1
n = n - 1
console.log(n) // output: 10
*/

////////////////////////21. Truthy and Falsy Values/////////////////////////
// Falsy Value: 0, undefined, '', null, NaN

////////////////////////22. Equality Operators == vs. ===/////////////////////////
/*
const age = 18
// strict equality, no type coercion
if (age === 18) console.log('Adult ❤️')
// Lossly equal, have type coercion
if (age == '18') console.log('String Adult')

const fav = Number(prompt("What is your fav num?"))
console.log(fav, typeof fav)
if (fav === 23) {
    console.log('Cool! 23 is great!')
} else if (fav === 7) {
    console.log('Cool! 7 is great!')
}
*/

////////////////////////24. Logic Operator/////////////////////////
/*const hasDriverLisense = true
const hasGoodVision = false
console.log(hasDriverLisense && hasGoodVision);
console.log(hasDriverLisense || hasGoodVision);
console.log(!hasDriverLisense);*/

////////////////////////26. The switch Statement/////////////////////////
/*const day = 'monday'
switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan my course');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Writing code');
        break;
    default:
        console.log('Invalid');
}*/

////////////////////////28. The Conditional Operator(Ternary)/////////////////////////
const age = 23
age >= 18 ? console.log('wine') : console.log('water')

const drink = age >= 18 ? 'wine' : 'water' // this is an expression not (if else) statement
console.log(drink)
// Since it is a expression, we can use ternary operator in string literals
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/**
 * JS: backward compatible: if you take the code 25 years old and run
 * in modern browsers, it should work
 * not forward compatible: if you take code written today and put in 
 * old browsers 25 years ago, it do not work
 * 
 * How to use modern js today?
 * during development: use the latest google chrome
 * production: use Babel to transpile and polyfill your code (converting back to 
 * ES5 to ensure browser compatibility for all users)
 * 
 * ES5: Ready to be use today
 * ES6: support in 
 */