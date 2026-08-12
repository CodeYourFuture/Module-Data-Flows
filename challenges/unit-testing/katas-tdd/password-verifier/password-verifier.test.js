let verify = require("./password-verifier");

test("rejects password shorter than 8 characters", function () {
  expect(verify("Ab1xyzw")).toEqual("Password rejected");
});

test("rejects null password", function () {
  expect(verify(null)).toEqual("Password rejected");
});

test("rejects password without uppercase letter", function () {
  expect(verify("abcdefg1")).toEqual("Password rejected");
});

test("rejects password without a number", function () {
  expect(verify("Abcdefgh")).toEqual("Password rejected");
});

test("accepts valid password", function () {
  expect(verify("Abcdefg1")).toEqual("Password accepted");
});
