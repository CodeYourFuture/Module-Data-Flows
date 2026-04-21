const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cow = (saying) => {
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
};
rl.question("What would you like the cow to say? ", function (answer) {
  cow(answer || "Mooooo");
  rl.close();
});
