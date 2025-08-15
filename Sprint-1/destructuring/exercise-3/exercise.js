let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log(`QTY     ITEM                TOTAL`);
let total = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const cost = (quantity * unitPricePence) / 100;
  total += cost;
  console.log(
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${cost.toFixed(2)}`
  );
});

console.log(`\nTotal: ${total.toFixed(2)}`);