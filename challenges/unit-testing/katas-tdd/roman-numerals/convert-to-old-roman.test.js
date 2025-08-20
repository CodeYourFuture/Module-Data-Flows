const convertToOldRoman = require("convert-to-old-roman.js");

test("returns I if passed 1 as an argument", () => {
  expect(convertToOldRoman(1)).toBe("I");
});

test("returns IIII if passed 4 as an argument", () => {
  expect(convertToOldRoman(4)).toBe("IIII");
});

test("returns V if passed 5 as an argument", () => {
  expect(convertToOldRoman(5)).toBe("V");
});

test("returns VIII if passed 8 as an argument", () => {
  expect(convertToOldRoman(8)).toBe("VIII");
});

test("returns X if passed 10 as an argument", () => {
  expect(convertToOldRoman(10)).toBe("X");
});

