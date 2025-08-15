let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let arr = [12, 33, 22, 45, 88, 54];
  // Act
  let expected = 88;
  // Assert
  expect(getLargestNumber(arr)).toBe(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
