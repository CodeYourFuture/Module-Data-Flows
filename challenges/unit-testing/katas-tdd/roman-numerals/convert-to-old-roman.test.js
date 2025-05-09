let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  const expectedOutput = "I";

  // Act
  const result = convertToOldRoman(input);

  // Assert
  expect(result).toBe(expectedOutput);
});
