// parity

// Improve the program so that it also shows odd numbers.

// This program must show exactly 10 numbers including the first one, not 11 numbers!


//// for loop
// for(let i = 1; i <= 10; i++){
//     if( i % 2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

//// while loop
// let i = 1;
// while(i <= 10){
//     if( i % 2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
//     i++;
// }


// Improve it again to replace the initial number 1 by a number given by the user.

//// for loop
// let userNum = Number(prompt(`Give number?`));
// for(let i = userNum; i <= userNum + 10; i++){
//     if( i % 2 === 0){
//             console.log(`${i} is even`);
//         } else{
//             console.log(`${i} is odd`);
//     }
// }


//// while loop
let userNum = Number(prompt(`Give number?`));
let i = userNum;
while(i < userNum + 10){
    if( i % 2 === 0){
        console.log(`${i} is even`);
    } else{
        console.log(`${i} is odd`);
    }
    i++;
}