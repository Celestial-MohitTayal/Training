/* Write your code below. Good luck! 🙂 */
let a = [96, 108, 89];
let b = [88, 91, 110];
let sumd = 0,
  sumk = 0;
for (let n of a) {
  sumd = sumd + n;
}
for (let n of b) {
  sumk = sumk + n;
}
let scoreDolphins = sumd / a.length;
let scoreKoalas = sumk / b.length;
if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}
