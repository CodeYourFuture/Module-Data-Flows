const add = require("./stringCalculator");

describe("String Calculator", () => {
    // Step 1: Simplest case
    test("should return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("should return the number itself for a single number", () => {
        expect(add("5")).toBe(5);
    });

    test("should return the sum of two numbers", () => {
        expect(add("3,6")).toBe(9);
    });

    // Step 2: Handle an unknown amount of numbers
    test("should handle an unknown amount of numbers", () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    // Step 3: Ignore big numbers
    test("should ignore numbers greater than 1000", () => {
        expect(add("2,1001")).toBe(2);
        expect(add("1000,1001")).toBe(1000);
    });

    // Step 4: Negative numbers
    test("should throw an error for a single negative number", () => {
        expect(() => add("-1")).toThrow("negatives not allowed: -1");
    });

    test("should throw an error for multiple negative numbers", () => {
        expect(() => add("1,-4,-1")).toThrow("negatives not allowed: -4, -1");
    });
});
