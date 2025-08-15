let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
let totalCostPence = 0;

console.log("QTY     ITEM                TOTAL");

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const costPence = quantity * unitPricePence;
  totalCostPence += costPence;

  console.log(
    `${quantity.toString().padStart(2)}     ${itemName.padEnd(18)} £${(costPence / 100).toFixed(2)}`
  );
});

console.log(`\nTotal: £${(totalCostPence / 100).toFixed(2)}`);