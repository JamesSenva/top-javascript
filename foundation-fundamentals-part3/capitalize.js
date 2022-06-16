// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(str){
    console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

capitalize('james');