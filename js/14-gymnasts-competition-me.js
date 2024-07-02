`strict mode`;

const dTotal = 44 + 23 + 71;
const kTotal = 65 + 54 + 49;

//const calcAverage = (a, b, c) => ((a + b + c) / 3);


const calcAverage = (scoreDolphins,  scoreKoalas) => {
    const dAverage = scoreDolphins/3;
    const kAverage = scoreKoalas/3;
    return checkWinner(dAverage, kAverage);
}

const checkWinner = function(avgDolphins, avgKoalas ) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
}

console.log(calcAverage(dTotal, kTotal));