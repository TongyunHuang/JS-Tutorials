'use strict'; // Activate Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true // can identify variable name error only in strict mode
if (hasDriversLicense) console.log('is true');
*/
//////////////////// 33. Functions  ////////////////////
/*function logger() {
    console.log('My name is Jonas');
}

// calling /running /invoking function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and 
    ${oranges} oranges.`
    return juice
}
fruitProcessor(5, 0)*/

//////////////////// 34. Function Declarations vs. Expression  ////////////////////
// function declaration: we can call them before they were defined
/*function calcAge1(birthYear) {
    return 2037 - birthYear
}

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
*/
//////////////////// 35. Arrow Functions  ////////////////////
// Useful in oneliner functions
/*const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 54 - age;
    return `${firstName} retires in ${retirement} years`;
}
*/
////////////////////39. Intro to Array
/*
const friends = ['A', 'B', 'C']
const years = new Array(1992, 1992, 1993)
console.log(friends[0])
console.log(years[0])
console.log(friends.length)*/

////////////////////40.Array Operations////////////////////
/*
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements at the end
const newLength = friends.push('Jay');
// Add elements at the beginning
friends.unshift('John');


// Remove elements
friends.pop(); // remove the Last

friends.shift(); // remove the First

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));// not in array, -1

friends.push(23);
// true if in the array, false otherwise (strict equality)
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

*/

////////////////////// 43. Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getInfo: function () {
        console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job} 
        and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license.`)
    }
};
jonas.getInfo();
*/
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, 
and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method 
on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }

}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }

}
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()}) `)
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()}) `)
}
*/

///////////////////////////////////////
// 40. Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips 
and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
This function calculates the average of all numbers in the given array. This is a 
DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, 
  start by creating a variable 'sum' that starts at 0. Then loop over the array using a 
  for loop. In each iteration, add the current value to the 'sum' variable. This way, 
  by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of 
  the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const calcTip = bill => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(tips[i] + bills[i])
}
console.log(tips)
console.log(totals)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const calcAvg = nums => {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum / nums.length
}
console.log(calcAvg(nums))
