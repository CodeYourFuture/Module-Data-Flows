let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Print the header for the receipt

console.log("QTY      ITEM                 TOTAL");

// Function to print the order details
// Use destructuring to access itemName, quantity, and unitPricePence

function printOrder(itemName, quantity, unitPricePence) {

  // Iterate over each item in the order
  // Use forEach to loop through the order array
  // Use destructuring to access itemName, quantity, and unitPricePence
  // Calculate total price for each item
  
  order.forEach(({ itemName, quantity, unitPricePence }) => {
    const totalPrice = (quantity * unitPricePence) / 100;
    console.log(
      `${quantity.toString().padStart(2)}       ${itemName.padEnd(20)} £${totalPrice.toFixed(2)}`
    );
  });

  // Calculate total cost of the order
  // Use destructuring to access quantity and unitPricePence
  // Use reduce to sum up the total cost
  // Format the total cost to two decimal places and prefix with a currency symbol
  // Log the total cost to the console
  // Use toFixed(2) to ensure two decimal places
  // Use console.log to print the total cost

  const totalCost = order.reduce((acc, { quantity, unitPricePence }) => {
  return acc + (quantity * unitPricePence);
}, 0) / 100;
console.log(`\nTotal: £${totalCost.toFixed(2)}`);
}
// Call the function to print the order
printOrder(order);




// Expected result

// QTY      ITEM                 TOTAL
//  1       Hot cakes           £2.32
//  2       Apple Pie           £2.78
//  1       Egg McMuffin        £2.80       
//  1       Sausage McMuffin    £3.00
//  2       Hot Coffee          £2.00
//  4       Hash Brown          £1.60
// Total: £14.50
