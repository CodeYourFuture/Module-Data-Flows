let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY".padEnd(8), "ITEM".padEnd(18), "TOTAL".padStart(6));
let billTotal = 0
order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = ((quantity * unitPricePence)/100).toFixed(2);
  billTotal += Number(itemTotal)
  console.log(quantity.toString().padEnd(8), itemName.padEnd(18), itemTotal.padStart(5)); 
});
console.log("\n");
console.log(`Total: ${billTotal.toFixed(2)}`);