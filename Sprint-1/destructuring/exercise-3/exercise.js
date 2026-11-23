let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");

let totalPence = 0;
for (const food of order) {
  const { itemName, quantity, unitPricePence } = food;
  const itemTotalPence = quantity * unitPricePence;
  const itemTotal = (itemTotalPence / 100).toFixed(2);

  totalPence += itemTotalPence;

  console.log(String(quantity).padEnd(8) + itemName.padEnd(20) + itemTotal);
}

console.log("");
console.log(`Total: ${(totalPence / 100).toFixed(2)}`);
