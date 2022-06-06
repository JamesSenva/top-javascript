// Rewrite the function using '?' or '||'
// importance: 4
// url : https://javascript.info/function-basics#rewrite-the-function-using-or

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

//     Using a question mark operator ?
//     Using OR ||


//variant 1 - using question mark operator
function checkAge(age){
    age > 18 ?  console.log(true) : console.log(confirm('Did parents allow you?'));
 }

//  variant 2 - using OR ||
// function checkAge(age){
//     return (age > 18) || confirm('Did parents allow you?');
// }

// 