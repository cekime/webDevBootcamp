// Task 1 - Create a function to encode a message

function cypher(string) {
  //newstring will contain the encryption:
  let newString = "";

  //looping through the original string:

  for (i = 0; i < string.length; i++) {
    let tempString = "";
    tempString += string[i];

    // to identify non letter characters, so that they can be added to the newstring without altering

    if (tempString.toUpperCase() === tempString.toLowerCase()) {
      newString += tempString;

      // finding the ASCII code of the character & the new ASCII code
    } else {
      let code = tempString.charCodeAt(0);
      let newCode = Number(code + 15);

      //   if the code if higher than 122 (letter z) minus 26 to loop back around to a, if not then use the code as is.

      if (newCode > 122) {
        newCode -= 26;
      }

      //   converting back to a letter:
      newString += String.fromCharCode(newCode);
    }
  }
  return newString;
}

let text = prompt("Please enter text to code");

//adjusting for Case sensitivity:
text = text.toLowerCase();

let encryted = cypher(text);

console.log(`The secret code for ${text} is ${encryted}`);
