// Carousel

// Write a program that launches a carousel for 10 turns, showing the turn number each time.


////// make using while loop

// let carousel = 1;
// while (carousel <= 10){
//     console.log(`Carousel turn number is ${carousel}`);
//     carousel++;
// }



////// make using for loop

// for (let carousel = 1; carousel <= 10; carousel++){
//     console.log(`Carousel turn number is ${carousel}`)
// }



//////////////  When it's done, improve it so that the number of turns is given by the user.


////// make using while loop

// let turnCount = Number(prompt('How many times do you want to turn carousel?'));
// let carousel = 1;
// while (carousel <= turnCount){
//     console.log(`Carousel turn number is ${carousel}`);
//     carousel++;
// }


////// make using for loop
let turnCount = Number(prompt('How many times do you want to turn carousel?'));
for(let carousel = 1; carousel <= turnCount; carousel++){
    console.log(`Carousel turn number is ${carousel}`);
}