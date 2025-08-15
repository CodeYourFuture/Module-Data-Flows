let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function formatPrice(pence) {
  return (pence / 100).toFixed(2);
}

// Padding widths stored in variables for easy maintenance
const col1Width = 8;   // QTY column
const col2Width = 20;  // ITEM column
const col3Width = 8;   // TOTAL column

console.log(
  "QTY".padEnd(col1Width) +
  "ITEM".padEnd(col2Width) +
  "TOTAL".padStart(col3Width)
);

let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = quantity * unitPricePence;
  totalCost += itemTotal;

  console.log(
    quantity.toString().padEnd(col1Width) +
    itemName.padEnd(col2Width) +
    formatPrice(itemTotal).padStart(col3Width)
  );
});

console.log(
  "\n" + "Total:".padEnd(col1Width + col2Width) + formatPrice(totalCost).padStart(col3Width)
);
