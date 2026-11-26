let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function receipt(array) {
  let sum = 0;
  console.log("QTY".padEnd(8) + "ITEM".padEnd(21) + "TOTAL");
  for (const element of array) {
    let { itemName, quantity, unitPricePence } = element;
    console.log(
      `${quantity.toString().padEnd(8)}${itemName.padEnd(20)} ${((unitPricePence / 100) * quantity).toFixed(2)}`
    );
    sum = sum + (unitPricePence / 100) * quantity;
  }
  console.log("\n" + "Total: " + sum.toFixed(2));
}
receipt(order);
