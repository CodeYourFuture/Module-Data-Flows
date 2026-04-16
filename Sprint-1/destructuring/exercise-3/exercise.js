let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// padEnd(n) adds spaces after a string until it reaches n characters wide.
// This makes columns line up neatly in the console output.
// Example: "QTY".padEnd(8) gives "QTY     " (5 spaces added, total 8 chars).
console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");

// This variable will accumulate the running total cost of the whole order.
let totalCost = 0;

// Loop through each item object in the order array.
// We use object destructuring in the for...of loop parameter to extract
// itemName, quantity, and unitPricePence from each object directly.
for (const { itemName, quantity, unitPricePence } of order) {
  // Calculate the total cost of this line item.
  // unitPricePence is in pence, so we divide by 100 to convert to pounds.
  const itemTotal = (quantity * unitPricePence) / 100;

  // Add this item's total to the running grand total.
  totalCost += itemTotal;

  // Print the row with aligned columns using padEnd.
  // String(quantity) converts the number to a string so we can call padEnd on it.
  // toFixed(2) formats the number to always show exactly 2 decimal places.
  // We also apply padEnd(10) to the TOTAL column so that values like 10.00 or
  // 100.00 do not break the alignment — the column is always 10 characters wide.
  console.log(
    String(quantity).padEnd(8) +
      itemName.padEnd(20) +
      itemTotal.toFixed(2).padEnd(10)
  );
}

// Print a blank line, then the total.
// The \n inside the template literal inserts a blank line before "Total:".
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
