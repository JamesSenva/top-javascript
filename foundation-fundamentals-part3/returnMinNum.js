// Function min(a, b)
// importance: 1
// url : https://javascript.info/function-basics#function-min-a-b

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


function returnMinNum(num1,num2){
    if(num1 < num2){
        return num1;
    } else {
        return num2;
    }
}