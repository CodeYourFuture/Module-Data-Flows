// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const nums = numbers.filter((n) => typeof n === "number");
  return nums.reduce((sum, n) => sum + n, 0) / nums.length;
}

module.exports = average;
