let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function getReceipt(order) {
  let total = 0;
  let receiptLines = ["QTY ITEM                    TOTAL"];
  let itemLines = order.map(({ itemName, quantity, unitPricePence }) => {
    const itemTotal = quantity * unitPricePence;
    total += itemTotal;
    const priceInPounds = (itemTotal / 100).toFixed(2);

    const quantityCol = String(quantity).padEnd(3, ' ');
    const itemCol = itemName.padEnd(20, ' ');
    const priceCol = `${priceInPounds}`.padStart(6, ' ');

    return `${quantityCol} ${itemCol}  ${priceCol}`;
  });
  receiptLines = receiptLines.concat(itemLines);
   receiptLines.push("");
  receiptLines.push(`TOTAL: ${(total / 100).toFixed(2)}`);
  return receiptLines.join('\n');
}
console.log(getReceipt(order));
