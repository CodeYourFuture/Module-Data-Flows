export function add(numbers) {
  if (numbers === "") return 0;

  const parts = numbers.split(",").map(Number);
  const negatives = parts.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return parts
    .filter((num) => num <= 1000) // ignore > 1000
    .reduce((sum, num) => sum + num, 0);
}