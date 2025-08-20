const getLargestNumber = require("./largest-number");

test("returns largest number in array", () => {
  const input = [3, 21, 88, 4, 36];
  const copy = [...input]; // to check original array is unchanged

  const output = getLargestNumber(input);

  expect(output).toBe(88);       // largest number
  expect(input).toEqual(copy);   // original array unchanged
});
