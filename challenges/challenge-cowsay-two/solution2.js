// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
const readLine = require("node:readline");
const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Write your word please: ", word => {
    cow(word);
    reader.close;
});
// 2. Make supplies for our speech bubble

const cowAscii = `
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||`;
// 3. Make a cow that takes a string

const cow = (saying) => {
    let topLine = "_";
    let bottomLine = "-";
    let sayingWord = ``;
    if (saying === ``){
        saying = "Moooo";
    }
    
    // how did you make the cow before?
    sayingWord = `< ${saying} >`;
    topLine += topLine.repeat(saying.length);
    bottomLine += bottomLine.repeat(saying.length);

    console.log(`
     ${topLine}
    ${sayingWord}
     ${bottomLine}
${cowAscii}   
        `)
}
// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)