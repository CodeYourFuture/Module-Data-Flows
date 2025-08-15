const verify = require('./verify');

describe("Password Verifier", () => {

    // Step 1: Test password length
    test("rejects passwords shorter than 8 characters", () => {
        expect(verify("short")).toBe("Password rejected");
    });

    // Step 2: Test null passwords
    test("rejects null passwords", () => {
        expect(verify(null)).toBe("Password rejected");
    });

    // Step 3: Test passwords without uppercase letters
    test("rejects passwords without uppercase letters", () => {
        expect(verify("lowercase1")).toBe("Password rejected");
    });

    // Step 3: Test passwords with uppercase letters
    test("accepts passwords with uppercase letters and at least 8 characters", () => {
        expect(verify("ValidPass1")).toBe("Password accepted");
    });

    // Step 4: Test passwords without numbers
    test("rejects passwords without numbers", () => {
        expect(verify("NoNumbers")).toBe("Password rejected");
    });

    // Step 4: Test passwords with all conditions met
    test("accepts passwords with numbers and all other conditions met", () => {
        expect(verify("Password1")).toBe("Password accepted");
    });
});