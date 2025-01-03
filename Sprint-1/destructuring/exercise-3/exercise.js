let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Print Header 
console.log("QTY     ITEM                TOTAL");

// Initialise total cost part
let totalCost = 0;

// Loop through the order and print each item's details part
order.forEach(({ itemName, quantity, unitPricePence }) => {
  let itemTotal = (quantity * unitPricePence) / 100; // Convert pence to pounds
  totalCost += itemTotal;
  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${itemTotal.toFixed(2)}`
  );
});

// Print Total Cost part
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
