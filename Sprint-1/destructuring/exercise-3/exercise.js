let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];


// Print header
console.log("QTY".padEnd(8) + "ITEM".padEnd(20) + "TOTAL");

for (let item of order) {

  const { itemName, quantity, unitPricePence } = item;
  const totalPrice = quantity * unitPricePence;

  const qtyStr = String(quantity).padEnd(8);
  const itemStr = itemName.padEnd(20);
  const totalStr = totalPrice.toFixed(2).padStart(5);

  console.log(
    `${qtyStr} ${itemStr} ${totalStr / 100}`);

  };