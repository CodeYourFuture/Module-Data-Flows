let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Header for the receipt
console.log("QTY     ITEM                TOTAL");

// Initialize total cost
let totalCostPence = 0;

// Iterate through each order item
order.forEach(({ itemName, quantity, unitPricePence }) => {
  // Calculate total price for the current item
  const itemTotalPence = quantity * unitPricePence;
  totalCostPence += itemTotalPence;

  // Format the item's total price in pounds
  const itemTotalPounds = (itemTotalPence / 100).toFixed(2);

  // Log the item's details with proper formatting
  console.log(
    `${quantity.toString().padEnd(7)}${itemName.padEnd(20)}${itemTotalPounds}`
  );
});

// Calculate the total cost in pounds
const totalCostPounds = (totalCostPence / 100).toFixed(2);

// Log the total cost
console.log(`\nTotal: ${totalCostPounds}`);