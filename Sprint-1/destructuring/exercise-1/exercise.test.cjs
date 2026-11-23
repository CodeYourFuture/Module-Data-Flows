const { execFileSync } = require("node:child_process");
const { join } = require("node:path");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("introduces the person using their details", () => {
  const output = execFileSync(process.execPath, [join(__dirname, "exercise.js")], {
    encoding: "utf8",
  });

  assert.equal(
    output.trim(),
    "Hello, my name is Popeye. I am 34 years old and my favourite food is Spinach."
  );
});
