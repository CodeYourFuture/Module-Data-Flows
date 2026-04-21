let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;

  // Act
  const result = convertToNewRoman(input);

  // Assert
  expect(result).toBe("I");
});
