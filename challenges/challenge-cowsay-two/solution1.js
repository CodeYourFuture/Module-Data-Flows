// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

let topLine = "_";
let bottomLine = "-";
let saying = process.argv[2] || "Mooooo";

// 3. Make a cow that takes a string

function cowsay(saying) {
  let line = "_".repeat(saying.length + 2);
  let bottom = "-".repeat(saying.length + 2);

  console.log(` ${line} `);
  console.log(`< ${saying} >`);
  console.log(` ${bottom} `);
  console.log(`        \\   ^__^`);
  console.log(`         \\  (oo)\\_______`);
  console.log(`            (__)\\       )\\/\\`);
  console.log(`                ||----w |`);
  console.log(`                ||     ||`);
}

cowsay(saying);
