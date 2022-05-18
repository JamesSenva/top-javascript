// Get number corresponding to the current month, with 0 being January and 11 being December
const months = new Date().getMonth();

switch(months){
    // Winter: January, February, and March
    case 0:
    case 1:
    case 2:
        console.log('It\'s Winter');
        break;
    // Spring: April, May, and June
    case 3:
    case 4:
    case 5:
        console.log('It\'s Spring');
        break;
    // Summer: July, August, and September
    case 6:
    case 7:
    case 8:
        console.log('It\'s Summer');
        break;
    // Autumn: October, November, and December
    case 9:
    case 10:
    case 11:
        console.log('It\'s Autumn')
        break;
    default:
        console.log('Something went horribly wrong!')
}