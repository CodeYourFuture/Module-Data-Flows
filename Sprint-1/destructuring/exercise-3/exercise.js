let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let receipt = `${"QTY".padEnd(6)}${"ITEM".padEnd(20)}${"TOTAL"}`;
let total = 0;
function printOrder(orders) {
  orders.forEach(({ itemName, quantity, unitPricePence }) => {
    receipt += `\n${quantity.toString().padEnd(6)}${itemName.padEnd(20)}${(unitPricePence / 100).toFixed(2)}\n`;
    total += unitPricePence;
  });
  receipt += `\nTotal: ${(total / 100).toFixed(2)} `;
  return receipt;
}
console.log(printOrder(order));
