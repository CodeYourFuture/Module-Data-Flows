// solution1.js - cowsay using command line arguments

const saying = process.argv[2] || "Moooo!";

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

console.log(cowsay(saying));
