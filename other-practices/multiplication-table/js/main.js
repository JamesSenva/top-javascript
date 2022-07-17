// Multiplication table

// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

//// while loop
let userNumber = 0;
while( userNumber < 2 || userNumber > 9){
    userNumber = Number(prompt(`Input your number:`));
}

console.log(`The multiplication table for ${userNumber}`)


//// while loop
// let i = 1;
// while (i <= 10){
//     console.log(`${userNumber} x ${i} = ${userNumber * i}`);
//     i++;
// }


//// for loop
for(let i = 1; i <= 10; i++){
    console.log(`${userNumber} x ${i} = ${userNumber * i}`);
}