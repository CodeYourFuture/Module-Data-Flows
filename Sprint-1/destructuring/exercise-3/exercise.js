let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
// write your function here:
function orderReceipt(order) {
  let total = 0;

  console.log(`${"QTY".padEnd(8)}${"ITEM".padEnd(25)}TOTAL`);

  for (let { itemName, quantity, unitPricePence } of order) {
    let itemTotal = (unitPricePence * quantity) / 100;
    total += itemTotal;

    console.log(
      `${String(quantity).padEnd(8)}${itemName.padEnd(25)}${itemTotal.toFixed(2)}`
    );
  }

  console.log(`\nTotal: ${total.toFixed(2)}`);
}
orderReceipt(order);
