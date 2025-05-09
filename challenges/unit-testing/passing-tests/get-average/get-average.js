// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numericValues = numbers.filter(item => typeof item === "number");
  if (numericValues.length === 0) {
    return 0;
  }
  let sum = numericValues.reduce((acc, num) => acc + num, 0);
  return sum / numericValues.length;
}

module.exports = average;
