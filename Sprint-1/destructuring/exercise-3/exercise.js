let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Define column spacing for consistent formatting
const columnSpacing = 8;

// Print the receipt header with aligned columns
console.log("QTY".padEnd(columnSpacing) + "ITEM".padEnd(20) + "TOTAL");

let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const totalItemCost = (unitPricePence * quantity) / 100; // Convert pence to pounds
  totalCost += totalItemCost;

  // Log each item's details with proper alignment
  console.log(
    `${quantity.toString().padEnd(columnSpacing)}${itemName.padEnd(20)}${totalItemCost.toFixed(2)}`
  );
});

// Print the total cost at the end
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
