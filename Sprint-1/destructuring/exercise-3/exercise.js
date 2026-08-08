let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function receipt(order) {
  let totalPrice = 0;

  console.log("QTY".padEnd(10) + "Item".padEnd(20) + "TOTAL");
  for (const item of order) {
    let { itemName, quantity, unitPricePence } = item;
    let pricePerQuantity = quantity * unitPricePence;
    console.log(
      String(quantity).padEnd(10) +
        itemName.padEnd(20) +
        (pricePerQuantity / 100).toFixed(2)
    );
    totalPrice += pricePerQuantity;
  }
  totalPrice = (totalPrice / 100).toFixed(2);
  // console,log()
}

console.log(receipt(order));
