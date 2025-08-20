import { add } from "./calculator";

describe("Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself when only one number is given", () => {
    expect(add("5")).toBe(5);
  });

  test("should return sum of two numbers", () => {
    expect(add("3,6")).toBe(9);
  });
});
