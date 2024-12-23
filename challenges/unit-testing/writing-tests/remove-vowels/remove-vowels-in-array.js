function removeVowelsFromWords(words) {
  return words.map(function (word) {
    return word.replace(/[aeiou]/gi, "");
  });
}

module.exports = removeVowelsFromWords;
