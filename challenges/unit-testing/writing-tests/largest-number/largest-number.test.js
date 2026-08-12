let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
  const original = [...input];
  // Act
  const result = getLargestNumber(input);
  // Assert
  expect(result).toEqual(88);
  expect(input).toEqual(original);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
