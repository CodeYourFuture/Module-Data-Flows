function add(numbers) {
    // Step 1: Handle an empty string
    if (numbers === "") return 0;

    // Step 2: Handle an unknown number of inputs
    const numArray = numbers.split(",").map(Number);

    // Step 3: Ignore numbers greater than 1000
    const filteredNumbers = numArray.filter(num => num <= 1000);

    // Step 4: Handle negative numbers
    const negatives = filteredNumbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    // Sum up the valid numbers
    return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;