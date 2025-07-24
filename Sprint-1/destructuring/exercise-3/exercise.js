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

order.forEach(({ itemName, quantity, unitPricePence }) => {
  let itemTotal = (quantity * unitPricePence) / 100;
  total += itemTotal;

  // Format output with padding
  const qtyStr = String(quantity).padEnd(8);
  const itemStr = itemName.padEnd(20);
  const totalStr = itemTotal.toFixed(2);

  console.log(`${qtyStr}${itemStr}${totalStr}`);
});

console.log(`\nTotal: ${total.toFixed(2)}`);