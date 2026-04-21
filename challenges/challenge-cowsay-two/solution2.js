// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble

// 3. Make a cow that takes a string

const cow = (saying) => {
    let line = "_".repeat(saying.length + 2);
    let bottom = "-".repeat(saying.length + 2);

    console.log(` ${line} `);
    console.log(`< ${saying} >`);
    console.log(` ${bottom} `);
    console.log(`        \\   ^__^`);
    console.log(`         \\  (oo)\\_______`);
    console.log(`            (__)\\       )\\/\\`);
    console.log(`                ||----w |`);
    console.log(`                ||     ||`);
  
};
rl.question("What would you like the cow to say? ", function(answer) {
  cow(answer || "Mooooo");
  rl.close();
});

// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)