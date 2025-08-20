// cowsay.js

// 1. Accept arguments
const userInput = process.argv.slice(2).join(' ');

// 2. Make speech bubble
function makeBubble(text) {
    if (!text) text = "Moo!";
    const len = text.length;
    const top = ' ' + '_'.repeat(len + 2);
    const middle = `| ${text} |`;
    const bottom = ' ' + '-'.repeat(len + 2);
    return `${top}\n${middle}\n${bottom}`;
}

// 3. Make a simple cow
function makeCow() {
    return `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
}

// 4. Combine bubble + cow
function cowsay(saying) {
    const bubble = makeBubble(saying);
    const cow = makeCow();
    return bubble + cow;
}

// 5. Log to console
console.log(cowsay(userInput));
