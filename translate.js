function translate(word) {
  //converting the word to lowercase
  word = word.toLowerCase();

  let firstLetter = word.charAt(0);
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelIndex = 0;
  const restOfLetters = word.substring(1);
  let vowelFirst = "way";
  let consFirst = "ay";

  //Look for vowel in first letter of word
  if (vowels.includes(word[0])) {
    //If vowel is found return word + way
    return word + vowelFirst;
  } else {
    //Look for number of consonants at beginning of word 
    for (let letter of word) {
      // Loop through until the first vowel is found
      if (vowels.includes(letter)) {
        // Store the index at which the first vowel exists
        vowelIndex = word.indexOf(letter);
        break;
      }
    }
    //Return new word created that has +ay at the end of it
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + consFirst;
  }
}
