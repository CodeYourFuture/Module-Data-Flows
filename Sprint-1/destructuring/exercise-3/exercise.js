let order = [
  { itemName: "Hot Cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Dynamically calculate column widths
const qtyWidth = Math.max(
  "QTY".length,
  ...order.map(({ quantity }) => quantity.toString().length)
);
const itemWidth = Math.max(
  "ITEM".length,
  ...order.map(({ itemName }) => itemName.length)
);
const totalWidth = Math.max(
  "TOTAL".length,
  ...order.map(({ quantity, unitPricePence }) =>
    ((quantity * unitPricePence) / 100).toFixed(2).length
  )
);

// Print header
console.log(
  `${"QTY".padEnd(qtyWidth + 2)}${"ITEM".padEnd(itemWidth + 2)}${"TOTAL".padStart(totalWidth)}`
);

let totalCost = 0;

// Print each item
order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = (quantity * unitPricePence) / 100;
  totalCost += itemTotal;

  console.log(
    `${quantity.toString().padEnd(qtyWidth + 2)}${itemName.padEnd(itemWidth + 2)}${itemTotal
      .toFixed(2)
      .padStart(totalWidth)}`
  );
});

// Print total
console.log(`\nTotal: ${totalCost.toFixed(2)}`);
