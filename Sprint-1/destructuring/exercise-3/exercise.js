let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY\tITEM\t\t\tTOTAL");

let total = 0;

// Determine the maximum item name length
const maxItemLength = Math.max(...order.map(({ itemName }) => itemName.length));

// Print the table rows
order.forEach(({ quantity, itemName, unitPricePence }) => {
    total += unitPricePence * quantity;

    // Format the price as pounds and pence
    const formattedPrice = (unitPricePence / 100).toFixed(2);

    // Adjust the item name to match column width
    const paddedItemName = itemName.padEnd(maxItemLength, ' ');

    // Log each item with formatted and padded details
    console.log(`${quantity}\t${paddedItemName}\t${formattedPrice}`);
});

// Print the total
const formattedTotal = (total / 100).toFixed(2);
console.log(`Total: ${formattedTotal}`);
