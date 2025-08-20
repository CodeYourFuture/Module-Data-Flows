const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function makeBubble(text) {
    if (!text) text = "Moo!";
    const len = text.length;
    const top = ' ' + '_'.repeat(len + 2);
    const middle = `| ${text} |`;
    const bottom = ' ' + '-'.repeat(len + 2);
    return `${top}\n${middle}\n${bottom}`;
}

const cow = (saying) => {
    const bubble = makeBubble(saying);
    const asciiCow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
    return bubble + asciiCow;
};

rl.question("What should the cow say? ", (answer) => {
    console.log(cow(answer));
    rl.close();
});
