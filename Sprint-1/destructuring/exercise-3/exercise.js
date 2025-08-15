let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


// Print out the header for the receipt
console.log("QTY     ITEM                TOTAL");

// Initialize the total cost in pence
let grandTotalPence = 0;

// Loop through each item in the order and log its details
order.forEach(({ quantity, itemName, unitPricePence }) => {
  const totalPence = quantity * unitPricePence;
  const total = totalPence / 100; // Convert pence to pounds
  console.log(`${quantity.toString().padEnd(8)} ${itemName.padEnd(20)} ${total.toFixed(2)}`);
  grandTotalPence += totalPence;
});

// Log the total cost at the bottom in pounds
const grandTotal = grandTotalPence / 100; // Convert total pence to pounds
console.log(`\nTotal: ${grandTotal.toFixed(2)}`);