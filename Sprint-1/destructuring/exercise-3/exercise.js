let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

// Print receipt for takeout order
console.log("QTY     ITEM                TOTAL");                                             // Print receipt header row with even spacing for 3 columns 

const orderTotal = order.reduce((sum, { itemName, quantity, unitPricePence }) => {            // Using reduce() to process each item in 'order' array and sum() to tally total order cost
  const itemPriceTotal = (unitPricePence * quantity) / 100;                                   // Destructure for required unit price and quantity values from each object: calculate in then divide by 100 for total in pounds
  console.log(  
    `${quantity.toString().padEnd(8)}${itemName.padEnd(20)}${itemPriceTotal.toFixed(2)}`      // Add spacing to align row output neatly and format total prices to 2 decimal places
  );
  return sum + itemPriceTotal;                                                                // Add item's total price to the running sum
}, 0);

console.log(`\nTotal: ${orderTotal.toFixed(2)}`);                                              // Print final total cost, formatted to 2 decimal places- on a new line
