let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Function to generate the receipt from the given order
function generateReceipt(order) {
  // Initialize a variable to hold the total cost of the order
  let totalCostPence = 0;

  // Print the header for the receipt
  console.log(" QTY     ITEM                 TOTAL");

  // Loop through each item in the order
  order.forEach(item => {
    // Use object destructuring to extract properties from each item
    const { itemName, quantity, unitPricePence } = item;
    
    // Calculate the total cost for the current item
    let itemTotalPence = quantity * unitPricePence;
    
    // Add the item total to the total cost
    totalCostPence += itemTotalPence;
    
    // Convert item total to pounds and format it to two decimal places
    let itemTotalPounds = (itemTotalPence / 100).toFixed(2);
    
    // Print the item details in the specified format
    console.log(`${quantity.toString().padStart(2)}       ${itemName.padEnd(20)} ${itemTotalPounds}`);
  });

  // Convert the total cost to pounds and format it to two decimal places
  let totalCostPounds = (totalCostPence / 100).toFixed(2);

  // Print the total cost of the order
  console.log("\nTotal:", totalCostPounds);
}

// Call the function to generate the receipt
generateReceipt(order);
