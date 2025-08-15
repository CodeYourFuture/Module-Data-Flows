let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  const input = [3, 21, 88, 4, 36];
  const expected = 88;
  
  // Act
  const result = getLargestNumber(input);

  // Assert
  expect(result).toBe(expected);
  expect(input).toEqual([3, 21, 88, 4, 36]); // Ensures the original array hasn't changed
});