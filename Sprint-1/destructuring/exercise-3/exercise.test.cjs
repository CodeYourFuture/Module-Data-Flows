const { execFileSync } = require("node:child_process");
const { join } = require("node:path");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("prints the item totals and formatted order total", () => {
  const output = execFileSync(process.execPath, [join(__dirname, "exercise.js")], {
    encoding: "utf8",
  });

  assert.equal(
    output.replace(/\r\n/g, "\n"),
    "QTY     ITEM                TOTAL\n" +
      "1       Hot Cakes           2.32\n" +
      "2       Apple Pie           2.78\n" +
      "1       Egg McMuffin        2.80\n" +
      "1       Sausage McMuffin    3.00\n" +
      "2       Hot Coffee          2.00\n" +
      "4       Hash Brown          1.60\n" +
      "\nTotal: 14.50\n"
  );
});
