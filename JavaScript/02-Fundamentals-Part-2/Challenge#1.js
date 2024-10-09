const calcAverage = (a, b, c) => {
    return  (a+b+c) / 3;
} 


function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > avgKoalas*2){
        console.log(`Dolphins win (${avgDolphins} VS. ${avgKoalas})`);
    } else if(avgKoalas > avgDolphins*2) {
        console.log(`Koalas win (${avgKoalas} VS. ${avgDolphins})`)
    } else{
        console.log(`No team wins...`)
    }
}



let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 42);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


