let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");

let total = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  let itemTotal = ((quantity * unitPricePence) / 100).toFixed(2);
  total += Number(itemTotal);

  console.log(
    String(quantity).padEnd(8) +
      itemName.padEnd(20) +
      itemTotal
  );
});

console.log(`\nTotal: ${total.toFixed(2)}`);