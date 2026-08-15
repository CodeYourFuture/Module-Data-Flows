let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function printReceipt(array) {
  const qty = "QTY";
  const item = "ITEM";
  const totals = "TOTAL";
  console.log(`${qty.padEnd(10, " ")}${item.padEnd(20, " ")}${totals}`);

  let totalPrice = 0;

  for (const { itemName, quantity, unitPricePence } of array) {
    const paddedQuantity = String(quantity).padEnd(10, " ");
    const paddedItem = itemName.padEnd(20, " ");
    let rowTotal = (quantity * unitPricePence) / 100;
    let rowTotalDisplayed = rowTotal.toFixed(2);

    console.log(`${paddedQuantity}${paddedItem}${rowTotalDisplayed}`);

    totalPrice = totalPrice + rowTotal;
  }
  console.log("");
  console.log(`Total: ${totalPrice.toFixed(2)}`);
}
printReceipt(order);
// Output:
// QTY     ITEM                TOTAL
// 1       Hot Cakes           2.32
// 2       Apple Pie           2.78
// 1       Egg McMuffin        2.80
// 1       Sausage McMuffin    3.00
// 2       Hot Coffee          2.00
// 4       Hash Brown          1.60

// Total: 14.50