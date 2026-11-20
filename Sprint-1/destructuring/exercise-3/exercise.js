let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY     ITEM                TOTAL");

let totalPence = 0;

for (const item of order) {
  const { itemName, quantity, unitPricePence } = item;
  const lineTotalPence = quantity * unitPricePence;
  totalPence += lineTotalPence;

  const qty = String(quantity).padEnd(8, " ");
  const name = itemName.padEnd(20, " ");
  const total = (lineTotalPence / 100).toFixed(2);

  console.log(`${qty}${name}${total}`);
}

console.log("");
console.log(`Total: ${(totalPence / 100).toFixed(2)}`);
