// Task 1:
// creating a prompt & a blank string to add the letters to:
let word = prompt("Please enter a word");
// let word = "Please enter a word";
let word2 = "";
word = word.toLowerCase();

// looping through the string from the end point backwards until the start point:
for (let i = word.length - 1; i >= 0; i--) {
  // adding the letters to the blank string:
  word2 = word2 + word[i];
}

let i = 0;
let counter = "";

// work thrugh the indexes of word & word2 to check if they match & add to the counter string if so.
// if the counter length is the same as the number of letters im the word then word = palinddrome

while (i < word.length)
  if (word[i] == word2[i]) {
    counter += "Y";
    i++;
  } else {
    console.log(`${word} is NOT a palindrome`);
    break;
  }
if (counter.length == word.length) {
  console.log(`${word} is a palindrome`);
}
