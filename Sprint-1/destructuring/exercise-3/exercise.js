let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Display the order summary
console.log(`QTY     ITEM                TOTAL`);

// Calculate the total for each item and the overall total
let total = order.reduce((sum, { quantity, itemName, unitPricePence }) => {
  let lineTotal = (quantity * unitPricePence) / 100;
  console.log(`${quantity}       ${itemName.padEnd(20)}${lineTotal.toFixed(2)}`);
  return sum + lineTotal;
}, 0);

// Display the overall total
console.log(`\nTotal: ${total.toFixed(2)}`);
