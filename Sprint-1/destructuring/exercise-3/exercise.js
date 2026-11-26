let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function receipt(orders) {
  let total = 0;
  console.log(`${"QTY"}    ${"ITEM"}               ${"Total"}`);

  for ({ itemName, quantity, unitPricePence } of orders) {
    total += quantity * unitPricePence;

    console.log(
      `${quantity.toString().padEnd(4)} ${itemName.toString().padEnd(21)}${((quantity * unitPricePence) / 100).toFixed(2)}`
    );
  }

  console.log(`\nTotal:${total.toFixed(2)}`);
}
receipt(order);
