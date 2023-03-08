// Task 1 

let userInput =  prompt("Please enter an uppercase letter, a lowercase letter or a number.")


if (Number.isInteger(Number(userInput)) ) {
    console.log(`${userInput} is a Number.`)
} 
// For the line below this was researched on StackOverflow - https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
else if (userInput.toLowerCase() === userInput.toUpperCase()) {
    console.log(`${userInput} is not a letter or a number!!`)
}
else if (userInput === userInput.toUpperCase() ) {
    console.log(`${userInput} is a Uppercase letter.`)
} 
else if (userInput === userInput.toLowerCase()) {
    console.log(`${userInput} is a Lowercase letter.`)
} 
