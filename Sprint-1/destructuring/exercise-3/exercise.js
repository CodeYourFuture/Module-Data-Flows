let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY     ITEM                TOTAL");

let totalCostPence = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotalPence = quantity * unitPricePence; // Calculate total for each item
  totalCostPence += itemTotalPence; // Add to total cost

  const itemTotal = (itemTotalPence / 100).toFixed(2); // Convert pence to pounds
  console.log(
    `${quantity.toString().padEnd(7)}${itemName.padEnd(20)}${itemTotal}`
  );
});

const totalCost = (totalCostPence / 100).toFixed(2); // Convert total pence to pounds
console.log(`\nTotal: ${totalCost}`);