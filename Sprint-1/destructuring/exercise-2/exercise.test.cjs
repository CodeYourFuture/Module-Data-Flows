const { execFileSync } = require("node:child_process");
const { join } = require("node:path");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("prints Gryffindors and teachers with pets", () => {
  const output = execFileSync(process.execPath, [join(__dirname, "exercise.js")], {
    encoding: "utf8",
  });

  assert.equal(
    output.replace(/\r\n/g, "\n"),
    "Harry Potter\nRon Weasley\nHermione Granger\nMinerva McGonagall\nAlbus Dumbledore\n\nAlbus Dumbledore\n"
  );
});
