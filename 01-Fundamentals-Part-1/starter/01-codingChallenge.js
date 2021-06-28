/**Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Createa Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
*/
// console.log(markBMI, johnBMI, markHigherBMI)

// Coding Challenge # 2

/**
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
 is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's 
 BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
 */
/*
if (johnBMI < markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
} else {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
}
*/

// Coding Challenge # 3
/*const avgDolphins = (96 + 108 + 89) / 3
const avgKoalas = (109 + 95 + 120) / 3
if (avgDolphins > avgKoalas && avgDolphins > 100) {
    console.log(`Dolphins win!`)
} else if (avgDolphins === avgKoalas && avgDolphins > 100) {
    console.log(`They draw!`)
} else if (avgDolphins < avgKoalas && avgKoalas > 100) {
    console.log(`Koalas Win!`)
} else {
    console.log(`no Bonus1`)
}*/

// Coding Challenge # 3
const bill = 275
const tip = bill < 300 && bill > 50 ? 0.15 : 0.2
console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total value ${bill * (1 + tip)}`)