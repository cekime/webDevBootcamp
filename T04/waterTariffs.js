// Task 2

let waterLitres = Number(
  prompt("Please enter how many litres of water you have used.")
);
let rate1 = Number(15.73);
let rate2 = Number(22.38);
let rate3 = Number(31.77);
let rate4 = Number(69.76);
let unit1 = Number(6);
let unit2 = Number(4.5);
let unit3 = Number(24.5);

if (waterLitres <= unit1) {
  console.log(waterLitres * rate1);
} else if (waterLitres <= unit1 + unit2) {
  console.log(unit1 * rate1 + (waterLitres - unit1) * rate2);
} else if (waterLitres <= unit1 + unit2 + unit3) {
  console.log(
    unit1 * rate1 + unit2 * rate2 + (waterLitres - unit1 - unit2) * rate3
  );
} else if (waterLitres > unit1 + unit2 + unit3) {
  console.log(
    unit1 * rate1 +
      unit2 * rate2 +
      unit3 * rate3 +
      (waterLitres - unit1 - unit2 - unit3) * rate4
  );
} else {
  console.log("Unknown Error");
}
