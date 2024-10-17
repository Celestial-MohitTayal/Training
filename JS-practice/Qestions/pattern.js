for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    if (i == 0 || i == 4 || i == 4 - j) str += "* ";
    else str += "  ";
  }
  console.log(str);
}

console.log("------------------------------");

for (let i = 0; i < 7; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    if (
      i == 0 ||
      i + j == 3 ||
      i + 1 == j ||
      (j == 2 && i < 5) ||
      (i + j == 6 && i > 3) ||
      (i == j + 2 && j > 2)
    )
      str += "* ";
    else str += "  ";
  }
  console.log(str);
}
