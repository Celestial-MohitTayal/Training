function calcTip(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  tips.push(tip);
  return tip;
}

let bills = [125, 555, 44];
let tips = [];
let totals = [];

for (let bill of bills) {
  totals.push(bill + calcTip(bill));
}
