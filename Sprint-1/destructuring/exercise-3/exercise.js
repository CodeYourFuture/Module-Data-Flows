let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Define constants for column formatting
const COLUMN_SPACING = 8;
const ITEM_COLUMN_WIDTH = 20;

function formatColumn(content, width) {
  return content.toString().padEnd(width);
}

// Print the receipt header with aligned columns
console.log(
  formatColumn("QTY", COLUMN_SPACING) +
    formatColumn("ITEM", ITEM_COLUMN_WIDTH) +
    "TOTAL"
);

let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const totalItemCost = (unitPricePence * quantity) / 100; // Convert pence to pounds
  totalCost += totalItemCost;

  // Log each item's details
  console.log(
    formatColumn(quantity, COLUMN_SPACING) +
      formatColumn(itemName, ITEM_COLUMN_WIDTH) +
      totalItemCost.toFixed(2)
  );
});

console.log(`\nTotal: ${totalCost.toFixed(2)}`);
