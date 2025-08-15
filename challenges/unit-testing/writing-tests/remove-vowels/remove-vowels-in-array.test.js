let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let array = ["Irina", "Etza", "Daniel"];
  // Act
  let expected = ["rn", "tz", "Dnl"];
  // Assert
  expect(removeVowelsFromWords(array)).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
