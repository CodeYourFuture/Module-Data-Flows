let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY     ITEM                TOTAL");
let basketTotal = 0;
order.forEach(({ itemName, quantity, unitPricePence }) => {
  itemTotal = quantity * unitPricePence;
  basketTotal += itemTotal;
  console.log(`${quantity}     ${itemName}                ${itemTotal}`);
});
console.log(`\nTotal: ${(basketTotal / 100).toFixed(2)} `);
