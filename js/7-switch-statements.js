//The switch statement
const day = "tuesday";

switch(day) { // basicly if else yet completely different
    case "monday": // day === 'monday' (which is true)
        console.log("Hey! It seems to be monday!");
        console.log(4 + " is a number");
        console.log(`on ${day}, f-strings are weird in js`);
        break;
    case "tuesday":
        console.log("Crap, its tuesday");
        break;
    case "wednesday": // executes code below for both cases
    case "thursday":
        console.log("Wednesday and Thursday are basicly the same day");
        console.log("woah");
        break;
    default:
        console.log("Only monday to thursday exist in this dimention");
        break;
}

//The switch statement but as an if statement

if (day === "monday") {
    console.log("Hey! It seems to be monday!");
    console.log(4 + " is a number");
    console.log(`on ${day}, f-strings are weird in js`);
} else if (day === "tuesday") {
    console.log("Crap, its tuesday");
} else if (day === "wednesday"  || day === "thursday") {
    console.log("Wednesday and Thursday are basicly the same day");
    console.log("woah");
} else {
    console.log("Only monday to thursday exist in this dimention");
}