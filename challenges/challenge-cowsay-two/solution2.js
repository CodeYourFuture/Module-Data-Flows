// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.
//To accept arguments from command line we can use readline module and get input from process.stdin
//The question method has two parameters. The first one is the question and the second one is the user input.
//It calls the callback function once the user enters input.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';
let saying ='';

// 3. Make a cow that takes a string

const cow = (saying) => {

const bubbleWidth = saying.length + 2; 
const top = '_'.repeat(bubbleWidth);
const bottom = '-'.repeat(bubbleWidth); 

console.log(top);
console.log(`< ${saying} >`);
console.log(bottom);
console.log('       /');
console.log('      /');
console.log(' ^__^/');
console.log(" (oo)'_______");
console.log(' (__)\        )-~');
console.log('    ||----w |');
console.log('    ||     ||');           
}

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)
rl.question('What should the cow say? ', (answer) => {
    const saying = answer.trim() || 'Mooooo'; 
    
    cow(saying);
    
    rl.close();
});