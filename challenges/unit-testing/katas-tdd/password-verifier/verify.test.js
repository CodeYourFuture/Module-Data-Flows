import { verify } from "./verify.js";

describe("Password Verifier", () => {

  test("rejects password shorter than 8 characters", () => {
    expect(verify("Ab1")).toBe("Password rejected");
  });

  test("rejects null password", () => {
    expect(verify(null)).toBe("Password rejected");
  });

  test("rejects password without uppercase letter", () => {
    expect(verify("password1")).toBe("Password rejected");
  });

  test("rejects password without number", () => {
    expect(verify("Password")).toBe("Password rejected");
  });

  test("accepts valid password", () => {
    expect(verify("Password1")).toBe("Password accepted");
  });

});
