let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// helper function that pads each item in a line by a certain amount
function formatReceiptEntry(quantity, itemName, total) {
  const qtyWidth = 8;
  const itemWidth = 20;

  return `${String(quantity).padEnd(qtyWidth)}${itemName.padEnd(itemWidth)}${total}`;
}

function printReceipt(order) {
  // print header
  console.log(formatReceiptEntry("QTY", "ITEM", "TOTAL"));

  let total = 0;

  // print each line item
  order.forEach(({ quantity, itemName, unitPricePence }) => {
    const price = ((quantity * unitPricePence) / 100).toFixed(2);
    console.log(formatReceiptEntry(quantity, itemName, price));
    total += quantity * unitPricePence;
  });

  // print total
  console.log(`\nTotal: ${(total / 100).toFixed(2)}`);
}

printReceipt(order);
