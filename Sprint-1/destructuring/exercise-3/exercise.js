let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY".padEnd(5) + "ITEM".padEnd(20) + "TOTAL");
let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const total = (quantity * unitPricePence) / 100; // Convert pence to dollars
  console.log(
    `${quantity.toString().padEnd(5)}${itemName.padEnd(20)}${total.toFixed(2)}`
  );
  totalCost += total;
});

console.log("\nTotal: " + totalCost.toFixed(2));