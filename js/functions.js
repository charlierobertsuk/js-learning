//functions
function logger(){
    console.log('Jerry stole my bread :(');
}

//calling / running / invoking the function
logger();


function fruitProcessor(grapes, oranges, bannana , plumb) {
    console.log(grapes, oranges, bannana, plumb);
    const juice = `Juice with ${grapes} grapes and ${oranges} oranges and ${bannana} bannanas and ${plumb} plumbs`;
    return juice;
}

const appleJuice = fruitProcessor(25, 0, 0, 0);
console.log(appleJuice);
console.log(fruitProcessor(0, 2, 0, 0));
console.log(fruitProcessor(0, 1, 8, 0));

const smoothie = fruitProcessor(133, 2, 4, 3)
console.log(`Smoothie: ${smoothie}`)