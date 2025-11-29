let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Print the receipt header
console.log("QTY     ITEM                TOTAL");

// Initialize total cost
let totalCost = 0;

// Loop through the order and log each item
order.forEach(({ itemName, quantity, unitPricePence }) => {
  const totalItemCost = (unitPricePence * quantity) / 100; // Convert pence to pounds
  totalCost += totalItemCost; // Add to total cost

  // Log the item details with proper formatting
  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${totalItemCost.toFixed(2)}`
  );
});

// Log the total cost
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
