let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  let original = [...input];

  // Act
  let result = getLargestNumber(input);

  // Assert
  expect(result).toBe(88);
  expect(input).toEqual(original);
});
