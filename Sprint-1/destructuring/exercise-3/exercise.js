let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
let totalPence = 0;

console.log("QTY     ITEM                TOTAL");

order.forEach(({ itemName, quantity, unitPricePence }) => {
  let itemTotal = quantity * unitPricePence;
  totalPence += itemTotal;

  console.log(
    `${quantity}       ${itemName}        ${(itemTotal / 100).toFixed(2)}`
  );
});

console.log(`\nTotal: ${(totalPence / 100).toFixed(2)}`);
