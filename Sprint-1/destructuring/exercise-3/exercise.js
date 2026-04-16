let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY\tITEM\t\t\tTOTAL");

let total = 0;

for (let { quantity, itemName, unitPricePence } of order) {
  const lineTotal = (quantity * unitPricePence) / 100; // Convert pence to pounds
  total += lineTotal;
  console.log(`${quantity}\t${itemName}\t\t${lineTotal.toFixed(2)}`);
}

console.log(`\nTotal: ${total.toFixed(2)}`);