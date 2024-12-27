// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?

const readLine = require("node:readline");
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Write a word please: ", word => {
    
})

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let sayingWord = '';

let cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
// 3. Make a cow that takes a string

function cowsay(saying) {
// how will you make the speech bubble contain the text?
    for(let i =0; i < saying.length; i++){
        topLine += "_";
        bottomLine += "-";
    }
    sayingWord = `< ${saying} >`;

// where will the cow picture go?

    console.log(` ${topLine}
${sayingWord}
 ${bottomLine}
${cow}`)

// how will you account for the parameter being empty?

}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
cowsay("hi");