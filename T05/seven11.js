//  Task 1

let userNumber = Number(prompt("Please enter a number"));
let outputNumber = "";

let a = userNumber % 7 != 0 && userNumber % 11 == 0;

if (userNumber % 7 == 0 && userNumber % 11 == 0) {
  outputNumber = `${userNumber} is divisible by 7 and 11!`;
} else if (userNumber % 7 != 0 && userNumber % 11 == 0) {
  outputNumber = `${userNumber} is divisible by 11!`;
} else if (userNumber % 7 == 0 && userNumber % 11 != 0) {
  outputNumber = `${userNumber} is divisible by 7!`;
} else if (userNumber % 7 != 0 && userNumber % 11 != 0) {
  outputNumber = `${userNumber} is neither divisible by 7 nor 11!`;
}

console.log(outputNumber);
