let removeVowelsFromWords = require("./remove-vowels-in-array");

// Test case for removing vowels from all words in an array
test("remove vowels from all words in array", function () {
  // Arrange: Define the input and expected output
  const input = ["Irina", "Etza", "Daniel"];
  const expectedOutput = ["rn", "tz", "Dnl"];

  // Act: Call the function with the input
  const actualOutput = removeVowelsFromWords(input);

  // Assert: Verify that the actual output matches the expected output
  expect(actualOutput).toEqual(expectedOutput);
});