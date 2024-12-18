// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?
// The process.argv array contains all arguments passed to the script.
// Index 0 is the path to node, index 1 is the script path, and arguments start from index 2.
const args = process.argv.slice(2);  

// 2. Make supplies for our speech bubble
let topLine = '_';
let bottomLine = '-';
let saying = args.length > 0 ? args.join(' ') : 'Mooooo'; 

// 3. Make a cow that takes a string
function cowsay(saying) {
// how will you make the speech bubble contain the text?
const bubbleWidth = saying.length + 2; 
const top = `${topLine.repeat(bubbleWidth)}`;  
const bottom = `${bottomLine.repeat(bubbleWidth)}`; 

// where will the cow picture go?
console.log(top);  
console.log(`< ${saying} >`);  
console.log(bottom);  
console.log('        \\   ^__^'); 
console.log('         \\  (oo)\\_______'); 
console.log('            (__)\       )\\/\\');  
console.log('             ||----w |');  
console.log('             ||     ||');  

// how will you account for the parameter being empty?
// I handled this in line 17. If no arguments are passed, the default value to saying is "Mooooo"
   
}

// 4. Pipe argument into cowsay function and return a cow
cowsay(saying);  

// how will you log this to the console?
// The code logs each part of the cow and the speech bubble using console.log() to display the cow.
