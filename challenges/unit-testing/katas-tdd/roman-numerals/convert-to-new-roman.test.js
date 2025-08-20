const convertToNewRoman = require("convert-to-new-roman.js");

test("returns I if passed 1 as an argument", () => {
  // Arrange
  const input = 1;

  // Act
  const result = convertToNewRoman(input);

  // Assert
  expect(result).toBe("I");
});

test("returns V if passed 5 as an argument", () => {
  const input = 5;
  const result = convertToNewRoman(input);
  expect(result).toBe("V");
});

test("returns X if passed 10 as an argument", () => {
  const input = 10;
  const result = convertToNewRoman(input);
  expect(result).toBe("X");
});

