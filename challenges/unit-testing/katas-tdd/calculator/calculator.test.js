let add = require("./calculator");

test("returns 0 for empty string", function () {
  expect(add("")).toEqual(0);
});

test("returns the number itself for a single number", function () {
  expect(add("5")).toEqual(5);
});

test("returns sum of two numbers", function () {
  expect(add("3,6")).toEqual(9);
});

test("handles unknown amount of numbers", function () {
  expect(add("1,2,3,4,5")).toEqual(15);
});

test("ignores numbers bigger than 1000", function () {
  expect(add("2,1001")).toEqual(2);
});

test("throws error for negative numbers", function () {
  expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
});

test("throws error listing all negatives", function () {
  expect(() => add("1,-2,-3")).toThrow("negatives not allowed: -2,-3");
});
