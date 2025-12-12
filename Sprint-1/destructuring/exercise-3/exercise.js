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

function formatColumns(quantity, item, total) {
  return (
    quantity.toString().padEnd(COLUMN_SPACING) +
    item.padEnd(ITEM_COLUMN_WIDTH) +
    total
  );
}

// Print the receipt header with aligned columns
console.log(formatColumns("QTY", "ITEM", "TOTAL"));

let totalCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const totalItemCost = (unitPricePence * quantity) / 100; // Convert pence to pounds
  totalCost += totalItemCost;

  // Log each item's details
  console.log(formatColumns(quantity, itemName, totalItemCost.toFixed(2)));
});

console.log(`\nTotal: ${totalCost.toFixed(2)}`);
