let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
// Header
console.log("QTY     ITEM                TOTAL");

let totalCostPence = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotalPence = quantity * unitPricePence;
  totalCostPence += itemTotalPence;

  // Format item output
  const formattedItemTotal = (itemTotalPence / 100).toFixed(2);
  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${formattedItemTotal}`
  );
});

// Total cost
console.log(`\nTotal: ${(totalCostPence / 100).toFixed(2)}`);
