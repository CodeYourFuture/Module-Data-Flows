let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY     ITEM                TOTAL");

let grandTotal = 0;

for (let item of order) {
  const { itemName, quantity, unitPricePence } = item;

  const total = (quantity * unitPricePence) / 100;
  grandTotal += total;

  // Format columns using padding
  const qtyCol = String(quantity).padEnd(7);
  const itemCol = itemName.padEnd(20);
  const totalCol = total.toFixed(2);

  console.log(`${qtyCol}${itemCol}${totalCol}`);
}

console.log("\nTotal: " + grandTotal.toFixed(2));
