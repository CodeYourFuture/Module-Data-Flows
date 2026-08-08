let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];
console.log("QTY".padEnd(5) + "ITEM".padEnd(22) + "TOTAL");

let grandTotal = 0;

function valueProperty(order) {
  for (let singleOrder of order) {
    let { itemName, quantity, unitPricePence } = singleOrder;

    let itemTotal = quantity * unitPricePence;
    grandTotal += itemTotal;

    console.log(
      String(quantity).padEnd(5) +
        itemName.padEnd(22) +
        (itemTotal / 100).toFixed(2)
    );
  }

  console.log("---------------------------");
  console.log("Total: " + (grandTotal / 100).toFixed(2));
}

valueProperty(order);
