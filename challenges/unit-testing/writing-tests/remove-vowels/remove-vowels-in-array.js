let removeVowels = require("./remove-vowels");
let arr = ["Irina", "Etza", "Daniel"];
function removeVowelsFromWords(words) {
  let result = words.map(function (word) {
    return removeVowels(word);
  });
  console.log(result);
  return result;
}
removeVowelsFromWords(arr);
module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
