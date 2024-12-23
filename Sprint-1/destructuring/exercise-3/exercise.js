let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 2 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY\tITEM\t\t\tTOTAL");

let total = 0;
let maxItemLength = 0; // Track the longest item name

// First, calculate the longest item name for proper alignment
order.forEach(({ itemName }) => {
    if (itemName.length > maxItemLength) {
        maxItemLength = itemName.length;
    }
});

// Now, print the table with proper alignment
order.forEach(({ quantity, itemName, unitPricePence }) => {
    total += unitPricePence * quantity;

    // Formatting the unitPricePence to include decimal points
    const formattedPrice = 
        (String(unitPricePence).slice(0, String(unitPricePence).length - 2) || '0') + 
        "." + 
        String(unitPricePence).slice(-2).padStart(2, '0');
    
    // Adjust itemName padding to ensure column width is consistent
    const paddedItemName = itemName.padEnd(maxItemLength, ' ');

    // Log each item row with padded ITEM column
    console.log(`${quantity}\t${paddedItemName}\t${formattedPrice}`);
});

// Format the total price to have 2 decimal places (padding if necessary)
const formattedTotal = (total / 100).toFixed(2);  // Convert to pounds and pad decimal places
console.log(`Total: ${formattedTotal}`);
