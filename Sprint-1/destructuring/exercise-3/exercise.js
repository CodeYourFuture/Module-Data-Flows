let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY       ITEM                          TOTAL");
let overallTotal = 0;
for (const{ itemName, quantity, unitPricePence } of order) {
  const total = quantity * unitPricePence;
  overallTotal += total;
  console.log(
    `${quantity.toString().padStart(2)}       ${itemName.padEnd(30)} £${(total / 100).toFixed(2)}`
  );
}
console.log(`\nTotal: £${(overallTotal/100).toFixed(2)}`);
  