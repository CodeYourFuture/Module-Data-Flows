let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// add header
console.log("QTY     ITEM                TOTAL");

let totalPence = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotalPence = quantity * unitPricePence;
  totalPence += itemTotalPence;

  const itemTotalPounds = (itemTotalPence / 100).toFixed(2);

  
  const qtyStr = quantity.toString().padEnd(7, " ");
  
  const formattedItemName = itemName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .padEnd(18, " ");

  const totalStr = itemTotalPounds.padStart(5, " ");

  
  console.log(`${qtyStr}${formattedItemName}${totalStr}`);
});


console.log(`\nTotal: ${(totalPence / 100).toFixed(2)}`);