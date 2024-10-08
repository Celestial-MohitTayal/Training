let calcAmp = function(temps){
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        if(typeof temps[i] !== 'number') continue;
        if(temps[i] > max){
            max = temps[i];
        }
        if(temps[i] < min){
            min = temps[i];
        }
    }
    
    return max - min;
}

console.log(calcAmp([3, 7, 4, 9, 'error', -4, -2, 10]));
