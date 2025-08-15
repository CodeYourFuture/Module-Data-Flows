let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY     ITEM                TOTAL");

let total = 0;

for (const { itemName, quantity, unitPricePence } of order) {
  const itemTotal = (unitPricePence * quantity) / 100;
  total += itemTotal;

  console.log(
    `${quantity.toString().padEnd(7)}${itemName.padEnd(20)}${itemTotal.toFixed(2)}`
  );
}

console.log(`Total: ${total.toFixed(2)}`);