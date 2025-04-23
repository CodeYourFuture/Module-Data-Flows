// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments
const argument = process.argv[2]
// how will you accept arguments?

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
// how will you make the speech bubble contain the text?
console.log(`
    ${topLine}
    ${saying}
    ${bottomLine}`)
// where will the cow picture go?
console.log(`
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||`)
// how will you account for the parameter being empty?

}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
cowsay()