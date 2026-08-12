// solution2.js - cowsay using readline prompt

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cowsay(text) {
  const line = "-".repeat(text.length + 2);
  return ` ${line}
< ${text} >
 ${line}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
}

rl.question("What should the cow say? ", function (answer) {
  console.log(cowsay(answer || "Moooo!"));
  rl.close();
});
