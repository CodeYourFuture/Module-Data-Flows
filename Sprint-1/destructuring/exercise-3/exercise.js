let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
const lines = [];
let grandTotal = 0;

for(const {itemName,quantity, unitPricePence} of order) {
  const itemTotal = (quantity * unitPricePence) / 100;

  const quantityStr = quantity.toString().padEnd(7, "");
  const itemNameStr = itemName.padEnd(20, " ");
  const totalStr = itemTotal.toFixed(2).padStart(5, " ");

  lines.push(`${quantityStr}${itemNameStr}${totalStr}`);
  grandTotal += itemTotal;
}

console.log("QTY    ITEM                  TOTAL");
console.log(lines.join("\n"));
console.log(`\nTotal: ${grandTotal.toFixed(2)}`);