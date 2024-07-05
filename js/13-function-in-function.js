// alt up and down to move lines of code
// ctrl D - selects all the word below that is identicle so all can be edited

'use strict';

function cutFriut (fruit) {
    return fruit * 9;
}

const fruitProcessor = function(apples, oranges) {
    
    const applePieces = cutFriut(apples);
    const orangePieces = cutFriut(oranges);
    
    const juice = `Juice with ${apples} apples cut into ${applePieces} pieces and ${oranges} oranges cut into ${orangePieces} pieces`;
    return juice;
}

console.log(fruitProcessor(2, 3));