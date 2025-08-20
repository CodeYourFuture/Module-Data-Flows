const removeVowels = require("./remove-vowels");

function removeVowelsFromWords(words) {
  return words.map(word => removeVowels(word));
}

module.exports = removeVowelsFromWords;

