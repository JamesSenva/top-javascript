// made a grading app which would take a number score and convert it to a letter grade, with the following requirements.

// Grade of 90 and above is an A
// Grade of 80 to 89 is a B
// Grade of 70 to 79 is a C
// Grade of 60 to 69 is a D
// Grade of 59 or below is an F

// Since we’re checking a range, we will perform the operation in each case to check if each expression is evaluating to true then break out of the statement once the requirements for true have been satisfied.

//set the student's grade
const grade = 98;

switch (true){
    // Grade of 90 and above is an A
    case grade >= 90:
        console.log('A');
        break;
    // Grade of 80 to 89 is a B
    case grade >= 80:
        console.log('B');
        break;
    // Grade of 70 to 79 is a C
    case grade >= 70:
        console.log('C');
        break;
    // Grade of 60 to 69 is a D
    case grade >= 60:
        console.log('D');
        break;
    // Grade of 59 or below is an F
    default:
        console.log('F');
}