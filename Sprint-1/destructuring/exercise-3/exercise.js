let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY     ITEM                TOTAL");

let total = 0;

order.forEach((product) => {
  const { itemName, quantity, unitPricePence } = product;

  const price = unitPricePence / 100;
  const lineTotal = quantity * price;
  total += lineTotal;

  console.log(
    `${quantity}       ${itemName.padEnd(18)} ${lineTotal.toFixed(2)}`
  );
});

console.log(`\nTotal: ${total.toFixed(2)}`);
