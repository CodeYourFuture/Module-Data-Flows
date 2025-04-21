// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble

const createSpeechBubble = (saying) => {
    const lines = saying.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const top = ' ' + '_'.repeat(maxLength + 2) + ' ';
    const bottom = ' ' + '-'.repeat(maxLength + 2) + ' ';
    const middle = lines.map(line => {
      const padding = ' '.repeat(maxLength - line.length);
      return `| ${line}${padding} |`;
    }).join('\n');
    return `${top}\n${middle}\n${bottom}`;
  };
  
  // 3. Make a cow that takes a string
  
  const cow = (saying) => {
    const speechBubble = createSpeechBubble(saying);
    return `${speechBubble}\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||`;
  };
  
  // 4. Use readline to get a string from the terminal 
  // (with a prompt so it's clearer what we want)
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What does the cow say? ', (saying) => {
    console.log(cow(saying));
    rl.close();
  });