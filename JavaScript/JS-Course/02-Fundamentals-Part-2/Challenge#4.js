const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals=[];

const calcTip=function (bill){
    tips.push(bill>=50 && bill<=300 ? bill*0.15: bill*0.2)
    return bill>=50 && bill<=300 ? bill*0.15: bill*0.2
}

for(let i=0;i<bills.length;i++){
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(tips,totals,bills)