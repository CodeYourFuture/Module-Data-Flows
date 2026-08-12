let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns III for 3", function () {
  expect(convertToOldRoman(3)).toEqual("III");
});

test("returns IIII for 4 (old style)", function () {
  expect(convertToOldRoman(4)).toEqual("IIII");
});

test("returns VII for 7", function () {
  expect(convertToOldRoman(7)).toEqual("VII");
});

test("returns XVIII for 18", function () {
  expect(convertToOldRoman(18)).toEqual("XVIII");
});

test("returns XXII for 22", function () {
  expect(convertToOldRoman(22)).toEqual("XXII");
});

test("returns M for 1000", function () {
  expect(convertToOldRoman(1000)).toEqual("M");
});
