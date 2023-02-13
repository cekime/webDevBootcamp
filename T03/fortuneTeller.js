// Task 2
let mumName = prompt("What is your mother's first name?");
let streetName = prompt("What is the name of the street that you grew up on?");
let favColour = prompt("What was your favourite colour as a child?");
let userAge = Number(prompt("What is your age?"));
let userNumber = Number(prompt("Pick a number between 1 - 10"));
let weddingYears = Math.round(userAge / userNumber);
let numKids = Math.round(userAge % userNumber);
let hairYears = Math.round(userAge - userNumber);

console.log(
  `In ${userNumber} years you are going to meet your best friend, called ${mumName} ${streetName}.\n` +
    `I predict that you will get married in ${weddingYears} years time.\n` +
    `The number of children which you will have is ${numKids}.\n` +
    `You will dye your hair all of the colours of the rainbow in ${hairYears} years time.`
);
