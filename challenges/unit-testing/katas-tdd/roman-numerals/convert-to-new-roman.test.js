let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  expect(convertToNewRoman(1)).toEqual("I");
});

test("returns IV for 4", function () {
  expect(convertToNewRoman(4)).toEqual("IV");
});

test("returns IX for 9", function () {
  expect(convertToNewRoman(9)).toEqual("IX");
});

test("returns XIV for 14", function () {
  expect(convertToNewRoman(14)).toEqual("XIV");
});

test("returns XLIV for 44", function () {
  expect(convertToNewRoman(44)).toEqual("XLIV");
});

test("returns XCIX for 99", function () {
  expect(convertToNewRoman(99)).toEqual("XCIX");
});

test("returns CMXLIV for 944", function () {
  expect(convertToNewRoman(944)).toEqual("CMXLIV");
});
