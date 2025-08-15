let average = require("./get-average");

test("Average", function () {
  let list = [4, "-", 8, 11, "hello", "57", 1, 2];
  let expected = 5.2;

  let output = average(list);

  expect(Number(output)).toBeCloseTo(expected, 1);
});
