function average(numbers) {
  const numsOnly = numbers.filter(n => typeof n === "number");

  if (numsOnly.length === 0) return 0;

  const sum = numsOnly.reduce((acc, n) => acc + n, 0);

  return Math.floor(sum / numsOnly.length); 
}

module.exports = average;


