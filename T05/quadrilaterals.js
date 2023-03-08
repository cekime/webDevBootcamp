// Task 2

let side1 = Number(prompt("Please enter the length of the first side"));
let side2 = Number(prompt("Please enter the length of the second side"));
let side3 = Number(prompt("Please enter the length of the third side"));
let side4 = Number(prompt("Please enter the length of the fourth side"));
let corner1 = Number(prompt("Please enter the first angle"));
let corner2 = Number(prompt("Please enter the second angle"));
let corner3 = Number(prompt("Please enter the third angle"));
let corner4 = Number(prompt("Please enter the fourth angle"));
let shape = "";

if (
  side1 == side2 &&
  side3 == side4 &&
  side1 == side3 &&
  90 == corner1 &&
  corner1 == corner2 &&
  corner2 == corner3 &&
  corner3 == corner4
) {
  shape = "Square";
} else if (
  side2 == side4 &&
  side1 == side3 &&
  90 == corner1 &&
  corner1 == corner2 &&
  corner2 == corner3 &&
  corner3 == corner4
) {
  shape = "Rectangle";
} else if (
  side1 == side2 &&
  side3 == side4 &&
  side1 == side3 &&
  corner1 == corner3 &&
  corner2 == corner4 &&
  ((corner1 < 90 && corner3 < 90 && corner2 >= 90 && corner4 >= 90) ||
    (corner2 < 90 && corner4 < 90 && corner1 >= 90 && corner3 >= 90))
) {
  shape = "Rhombus";
} else if (
  side1 == side3 &&
  side2 == side4 &&
  corner1 == corner3 &&
  corner2 == corner4 &&
  ((corner1 < 90 && corner3 < 90 && corner2 >= 90 && corner4 >= 90) ||
    (corner2 < 90 && corner4 < 90 && corner1 >= 90 && corner3 >= 90))
) {
  shape = "Parallelogram";
} else {
  shape = "Unknown Shape";
}

console.log(shape);
