// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

//     If it equals “TheMaster”, then show “Welcome!”,
//     Another string – show “Wrong password”,
//     For an empty string or cancelled input, show “Canceled”

// The schema:

// Please use nested if blocks. Mind the overall readability of the code.

// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.



//begin - who is there?
let userName = prompt('Who is there?','');

// if the answer is 'Admin' ask for password or else other 'I don't know you' or else if canceled 'Canceled'

if (userName === 'Admin'){
    let pass = prompt('Password?','');

    // if password is 'TheMaster' return 'Welcome!' or else if other 'Wrong Password' or else if canceled 'Canceled'
    if(pass === 'TheMaster'){
        alert('Welcome!');
    } else if(pass === '' || pass === null){
        alert('Canceled');
    } else {
        alert('Wrong Password');
    } 


} else if (userName === '' || userName === null){
    alert('Canceled');
} else {
    alert('I don\'t know you');
}