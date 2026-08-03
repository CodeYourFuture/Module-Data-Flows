let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


console.log("QTY     ITEM                TOTAL");

let grandTotal = 0;

for (let item of order) {
  // Object destructuring
  const { itemName, quantity, unitPricePence } = item;
  const total = (unitPricePence / 100) * quantity;
  grandTotal += total; // the price is in pence so divide by 100 to get pounce equivalent,

  // Format each line
  const qtyStr = String(quantity).padEnd(7);
  const itemStr = itemName.padEnd(20);
  const totalStr = total.toFixed(2);

  console.log(`${qtyStr}${itemStr}${totalStr}`);
}

console.log(`\nTotal: ${grandTotal.toFixed(2)}`);